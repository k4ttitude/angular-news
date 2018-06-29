import { Image } from './image';

export class Article {
	
	section: String;
	subsection: String;
	title: String;
	abstract: String;
	url: String;
	short_url: String;

	update_date: String;
	created_date: String;
	publised_date: String;

	multimedia: Image[];
}