import { NextResponse } from "next/server";
const { default: prisma } = require("../../../../../prisma/client");

// GET BUKU BY ID ====================================
export async function GET(request, { params }) {
  const book_id = parseInt(params.id);

  try {
    // Pengecekan jika id param kosong
    if (isNaN(book_id)) {
      return NextResponse.json(
        {
          success: false,
          message: "ID cannot be empty or must be a valid number",
          data: null,
        },
        {
          status: 400, // Bad Request
        }
      );
    }

    const book = await prisma.book.findUnique({
      where: {
        id: book_id, // Menggunakan book_id yang sudah di-parse
      },
    });

    if (!book) {
      return NextResponse.json(
        {
          success: false,
          message: "Book data not found",
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
          message: "Book data found",
          data: book,
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

// UPDATE BUKU ====================================
export async function PATCH(request, { params }) {
  const book_id = parseInt(params.id);
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
    // Pengecekan jika id param kosong
    if (isNaN(book_id)) {
      return NextResponse.json(
        {
          success: false,
          message: "ID cannot be empty or must be a valid number",
          data: null,
        },
        {
          status: 400, // Bad Request
        }
      );
    }

    const book = await prisma.book.update({
      where: {
        id: book_id, // Menggunakan book_id yang sudah di-parse
      },
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

// DELETE BUKU ====================================
export async function DELETE(request, { params }) {
  const book_id = parseInt(params.id);

  try {
    // Pengecekan jika id param kosong
    if (isNaN(book_id)) {
      return NextResponse.json(
        {
          success: false,
          message: "ID cannot be empty or must be a valid number",
          data: null,
        },
        {
          status: 400, // Bad Request
        }
      );
    }

    await prisma.book.delete({
      where: {
        id: book_id, // Menggunakan book_id yang sudah di-parse
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Success delete book",
        data: null,
      },
      {
        status: 200, // OK
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        data: book,
      },
      {
        status: 404,
      }
    );
  }
}
