import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const backendUrl = `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8003'}/api/explorer/states`
    console.log(`[API Route] Fetching from: ${backendUrl}`)
    
    const response = await fetch(backendUrl)
    
    console.log(`[API Route] Response status: ${response.status}`)
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error(`[API Route] Backend error response: ${errorText}`)
      return NextResponse.json(
        { error: `Backend error: ${response.status}`, details: errorText },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log(`[API Route] Data received:`, data)
    return NextResponse.json(data)
  } catch (error) {
    console.error('[API Route] Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch states', details: String(error) },
      { status: 500 }
    )
  }
}
