"use client";

import { useState } from "react";

export default function BillingPage() {
    const [loading, setLoading] = useState<string | null>(null);

    const handleSubscribe = async (planId: string) => {
        setLoading(planId);
        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ planId, userId: "usr_123" }),
            });
            const data = await res.json();
            if (data.url) {
                window.location.href = data.url;
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(null);
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
            <nav className="flex justify-between items-center p-6 bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer" onClick={() => window.location.href = '/'}>O</div>
                    <h1 className="text-xl font-bold tracking-tight text-slate-800 cursor-pointer" onClick={() => window.location.href = '/'}>OpenClaw Managed</h1>
                </div>
                <div className="flex gap-6 items-center">
                    <button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition" onClick={() => window.location.href = '/'}>Dashboard</button>
                    <div className="h-4 w-px bg-slate-200"></div>
                    <span className="text-sm font-bold text-slate-900">Billing Settings</span>
                </div>
            </nav>

            <div className="max-w-5xl mx-auto mt-12 px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Simple, transparent pricing</h2>
                    <p className="mt-4 text-xl text-slate-500">Scale your autonomous agents without the infrastructure headache.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Developer Plan */}
                    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
                        <h3 className="text-xl font-bold text-slate-800">Developer</h3>
                        <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                            $29
                            <span className="ml-1 text-xl font-medium text-slate-500">/mo</span>
                        </div>
                        <p className="mt-4 text-sm text-slate-500">Perfect for building and testing local agents.</p>
                        <ul className="mt-8 space-y-4 flex-1">
                            {['Up to 5 autonomous agents', 'Shared EKS cluster', 'Standard API rate limits', 'Community support'].map(feature => (
                                <li key={feature} className="flex items-center text-sm text-slate-600">
                                    <span className="mr-3 text-emerald-500">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => handleSubscribe('plan_dev')}
                            disabled={loading === 'plan_dev'}
                            className="mt-8 w-full block bg-slate-50 hover:bg-slate-100 text-blue-600 font-semibold border border-slate-200 rounded-xl py-3 text-center transition"
                        >
                            {loading === 'plan_dev' ? 'Processing...' : 'Start building'}
                        </button>
                    </div>

                    {/* Scale Plan */}
                    <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col relative transform md:-translate-y-4">
                        <div className="absolute top-0 right-6 transform -translate-y-1/2">
                            <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">Most Popular</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">Scale</h3>
                        <div className="mt-4 flex items-baseline text-5xl font-extrabold text-white">
                            $149
                            <span className="ml-1 text-xl font-medium text-slate-400">/mo</span>
                        </div>
                        <p className="mt-4 text-sm text-slate-400">For production workloads and scaling startups.</p>
                        <ul className="mt-8 space-y-4 flex-1">
                            {['Up to 50 autonomous agents', 'Dedicated Kubernetes namespace', 'High priority API routing', 'Custom model integrations', '24/7 priority support'].map(feature => (
                                <li key={feature} className="flex items-center text-sm text-slate-300">
                                    <span className="mr-3 text-blue-400">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => handleSubscribe('plan_scale')}
                            disabled={loading === 'plan_scale'}
                            className="mt-8 w-full block bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl py-3 text-center transition shadow-lg shadow-blue-500/30"
                        >
                            {loading === 'plan_scale' ? 'Processing...' : 'Scale to production'}
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
                        <h3 className="text-xl font-bold text-slate-800">Enterprise</h3>
                        <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                            Custom
                        </div>
                        <p className="mt-4 text-sm text-slate-500">Dedicated cloud environments for large teams.</p>
                        <ul className="mt-8 space-y-4 flex-1">
                            {['Unlimited agents', 'Dedicated VPC & EKS Cluster', 'Bare-metal GPU access', 'SOC2 / HIPAA Compliance', 'Dedicated Solutions Architect'].map(feature => (
                                <li key={feature} className="flex items-center text-sm text-slate-600">
                                    <span className="mr-3 text-emerald-500">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button
                            className="mt-8 w-full block bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold border border-slate-200 rounded-xl py-3 text-center transition"
                        >
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
