import featured1 from "./featured-1.jpg";
import featured2 from "./featured-2.jpg";
import featured3 from "./featured-3.jpg";
import featured4 from "./featured-4.jpg";

export const featured = [featured1, featured2, featured3, featured4]
export const featuredByIndex = index => featured[index % featured.length]