import dbConnect from '../../../../../public/config/db';
import PostItem from '../../../../../public/models/PostItem';

dbConnect();

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const postItem = await PostItem.findById(params.id).select('-__v');
    return Response.json(postItem);
  } catch (error) {
    console.error("SavedItem not working:");
    return new Response(
      JSON.stringify({ message: 'No Item Found for this ID' }),
      { status: 404 }
    );
  }
}
