// In-memory store for active visitors (resets on server restart)
// Each visitor has an ID and last seen timestamp

interface ActiveVisitor {
    id: string
    lastSeen: number
}

const activeVisitors = new Map<string, ActiveVisitor>()

// Visitors are considered "online" if seen in the last 60 seconds
const ONLINE_THRESHOLD = 60 * 1000

function cleanupOldVisitors() {
    const now = Date.now()
    for (const [id, visitor] of activeVisitors) {
        if (now - visitor.lastSeen > ONLINE_THRESHOLD) {
            activeVisitors.delete(id)
        }
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const visitorId = body.visitorId

        if (visitorId) {
            activeVisitors.set(visitorId, {
                id: visitorId,
                lastSeen: Date.now()
            })
        }

        cleanupOldVisitors()

        return Response.json({
            success: true,
            online: activeVisitors.size
        })
    } catch {
        return Response.json({ success: false, online: 0 })
    }
}

export async function GET() {
    cleanupOldVisitors()
    return Response.json({ online: activeVisitors.size })
}
