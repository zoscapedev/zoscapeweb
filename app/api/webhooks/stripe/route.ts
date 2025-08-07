import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { createReservation } from '@/services/reservation';

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = headers().get('stripe-signature');

    if (!signature) {
      return new Response('Invalid signature', { status: 400 });
    }

    // ⚠️ Stripe is disabled — skip actual verification
    // const event = stripe.webhooks.constructEvent(
    //   body,
    //   signature,
    //   process.env.STRIPE_WEBHOOK_SECRET!
    // );

    // Fake event for dev/testing
    const event = {
      type: 'checkout.session.completed',
      data: {
        object: {
          customer_details: { email: 'test@example.com' },
          metadata: {
            listingId: 'placeholder-id',
            startDate: new Date().toISOString(),
            endDate: new Date().toISOString(),
            totalPrice: '100',
            userId: 'placeholder-user-id',
          },
        },
      },
    };

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      if (!session.customer_details?.email) {
        throw new Error('Missing user email');
      }

      const {
        listingId,
        startDate,
        endDate,
        totalPrice,
        userId,
      } = session.metadata || {};

      if (
        !listingId ||
        !startDate ||
        !endDate ||
        !totalPrice ||
        !userId
      ) {
        throw new Error('Invalid request metadata');
      }

      await createReservation({
        listingId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        totalPrice: Number(totalPrice),
        userId,
      });
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: 'Something went wrong', ok: false },
      { status: 500 }
    );
  }
}
