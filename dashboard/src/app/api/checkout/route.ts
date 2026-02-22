import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { planId, userId } = body;

        // Validate request
        if (!planId || !userId) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Mock Stripe Checkout Session creation
        // In production, this would use the official Stripe Node.js library:
        // const session = await stripe.checkout.sessions.create({ ... })

        console.log(`[Stripe Mock] Creating checkout session for user ${userId} on plan ${planId}`);

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        const mockCheckoutUrl = `/billing?success=true&session_id=cs_test_mock${Math.floor(Math.random() * 1000000)}`;

        return NextResponse.json({ url: mockCheckoutUrl });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
