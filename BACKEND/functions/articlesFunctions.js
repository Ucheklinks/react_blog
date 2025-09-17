

//! postgresql queries here will need modification

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

    return result.rows;
  } catch (err) {
    console.error(err);
    // * TODO change code below maybe?
    // res.status(500).send("Database error");
  }
}

export async function GetSpecificArticle(id, dbclient) {
  try {
    const result = await dbclient.query(`SELECT * FROM posts WHERE id = $1`, [
      title,
    ]);
  } catch (err) {
    console.log(err);
  }
}

export async function EditSpecificArticle(id, dbclient) {
  try {
    const result = await db.query(`SELECT * FROM posts WHERE title = $1`, [
      title,
    ]);
  } catch (err) {
    console.log(err);
  }
}

export async function DeleteSpecificArticle(id, dbclient) {
  try {
    const result = await db.query(`SELECT * FROM posts WHERE title = $1`, [
      title,
    ]);
  } catch (err) {
    console.log(err);
  }
}
