export async function GetAllArticles(dbclient) {
  try {
    const result = await dbclient.query("SELECT * FROM articles");

    return result.rows;
  } catch (err) {
    console.log(err);
  }
}

export async function PostArticle(dbclient) {
  try {
    // Insert into DB including image
    const result = await dbclient.query(
      "INSERT INTO articles (user_id, title, content)"
    );
  } catch (err) {
    console.error(err);
    // * TODO change code below maybe?
    // res.status(500).send("Database error");
  }
}

export async function GetSpecificArticle(title, dbclient) {
  try {
    const result = await db.query(`SELECT * FROM posts WHERE title = $1`, [
      title,
    ]);
  } catch (err) {
    console.log(err);
  }
}

export async function EditSpecificArticle(title) {
  try {
    const result = await db.query(`SELECT * FROM posts WHERE title = $1`, [
      title,
    ]);
  } catch (err) {
    console.log(err);
  }
}

export async function DeleteSpecificArticle(title) {
  try {
    const result = await db.query(`SELECT * FROM posts WHERE title = $1`, [
      title,
    ]);
  } catch (err) {
    console.log(err);
  }
}
