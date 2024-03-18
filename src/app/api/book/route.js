import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

// GET ALL BOOK
export async function GET() {
  const books = await prisma.book.findMany();

  return NextResponse.json(
    {
      sucess: true,
      message: "Success get data books",
      data: books,
    },
    {
      status: 200,
    }
  );
}

// INSERT BOOK
export async function POST(request) {
  const {
    title,
    description,
    year_release,
    stock,
    img_url,
    author_id,
    book_category_id,
    price,
    admin_id,
  } = await request.json();

  try {
    const book = await prisma.book.create({
      data: {
        data: {
          title: title,
          desc: description,
          year_release: year_release,
          stock: stock,
          img_url: img_url,
          book_category_id: book_category_id,
          admin_id: admin_id,
          author_id: author_id,
          price: price,
        },
      },
    });

    if (!book) {
      return NextResponse.json(
        {
          success: false,
          message: "Book data update unsuccessful",
          data: null,
        },
        {
          status: 404, // Not Found
        }
      );
    } else {
      return NextResponse.json(
        {
          success: true,
          message: "Book data update successful",
          data: null,
        },
        {
          status: 200, // OK
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        data: book,
      },
      {
        status: 404, // OK
      }
    );
  }
}
