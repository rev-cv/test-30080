import Fastify from 'fastify';
import cors from '@fastify/cors';
import fs from 'fs';

const fastify = Fastify();
fastify.register(cors);

fastify.get('/', async (request, reply) => {
  try {
    // Чтение файла data.json
    const data = await fs.promises.readFile('./users.json', 'utf-8');
    // Парсинг JSON-данных
    const jsonData = JSON.parse(data);

	if (request.query.term) {
		const result = jsonData.filter((elem)=> elem.name.toLowerCase().search(request.query.term.toLowerCase()) !== -1);
		reply.send(JSON.stringify(result));
	} else {
		reply.send(jsonData);
	}


  } catch (err) {
    // Обработка ошибок, например, если файл не найден или ошибка в JSON
    reply.status(500).send({ error: 'Failed to read or parse JSON file' });
  }
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();