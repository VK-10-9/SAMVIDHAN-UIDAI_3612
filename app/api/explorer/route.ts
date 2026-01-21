import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const page = searchParams.get('page') || '1'
    const limit = searchParams.get('limit') || '25'
    const sort = searchParams.get('sort') || 'date'
    const order = searchParams.get('order') || 'desc'
    const search = searchParams.get('search') || ''
    const state = searchParams.get('state') || ''

    const backendUrl = new URL(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8003'}/api/explorer/enrollment`)
    backendUrl.searchParams.set('page', page)
    backendUrl.searchParams.set('limit', limit)
    backendUrl.searchParams.set('sort', sort)
    backendUrl.searchParams.set('order', order)
    
    if (search) backendUrl.searchParams.set('search', search)
    if (state) backendUrl.searchParams.set('state', state)

    const url = backendUrl.toString()
    console.log(`[API Route /explorer] Fetching from: ${url}`)
    const response = await fetch(url)
    
    console.log(`[API Route /explorer] Response status: ${response.status}`)
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error(`[API Route /explorer] Backend error: ${errorText}`)
      return NextResponse.json(
        { error: `Backend error: ${response.status}`, details: errorText },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log(`[API Route /explorer] Data received with ${data?.length || 0} items`)
    return NextResponse.json(data)
  } catch (error) {
    console.error('[API Route /explorer] Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch explorer data', details: String(error) },
      { status: 500 }
    )
  }
}
