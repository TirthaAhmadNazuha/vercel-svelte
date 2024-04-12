import vercel from '@vercel/node'

/**
 * 
 * @param {vercel.VercelRequest} request 
 * @param {vercel.VercelResponse} response 
 */
export async function GET(request, response) {
    console.dir(request)
    return new Response('hello world')
}