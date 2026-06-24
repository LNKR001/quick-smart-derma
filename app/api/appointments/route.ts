import { NextResponse } from "next/server";

/**
 * Appointment booking endpoint.
 *
 * Currently validates the payload and returns success. Wire this to your
 * CRM / email / database (e.g. send to a booking service or persist to a DB).
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();

  if (!name || !phone || !email) {
    return NextResponse.json(
      { error: "Name, phone and email are required." },
      { status: 422 },
    );
  }

  // TODO: persist / notify here.
  console.log("[appointment]", { name, phone, email, treatment: body.treatment, date: body.date });

  return NextResponse.json({ ok: true, received: { name, phone, email } });
}
