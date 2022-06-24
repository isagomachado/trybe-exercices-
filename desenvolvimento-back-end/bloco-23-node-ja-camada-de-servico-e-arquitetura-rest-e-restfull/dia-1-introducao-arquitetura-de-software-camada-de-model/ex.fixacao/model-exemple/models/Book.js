const connection = require('./connection');

// Converte o nome dos campos de snake_case para camelCase
const serialize = (bookData) => ({
	id: bookData.id,
	title: bookData.title,
	authorId: bookData.author_id,
});

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_exemple.books WHERE id=?;'
  const [books] = await connection.query(query, [authorId]);
  return books;
}

const getAllBooks = async () => {
	const [books] = await connection.query(
		'SELECT id, title, author_id FROM model_exemple.books;',
	);
	return books.map(serialize);
};

module.exports = {
  getAllBooks,
  getByAuthorId,
}