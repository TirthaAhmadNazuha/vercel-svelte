export async function GET(request, response) {
    console.dir(request)
    return new Response('hello world')
}