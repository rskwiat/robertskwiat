import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from 'remark';
import html from 'remark-html';


const postsDirectory = path.join(process.cwd(), 'content');

export const getData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

	const processedContent = await remark().use(html).process(matterResult.content);
	const contentHtml = processedContent.toString();
  // Combine the data with the id
  return {
    id,
		contentHtml,
    ...matterResult.data,
  };
}
