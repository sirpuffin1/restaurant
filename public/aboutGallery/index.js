import slide1 from "./slide-1.jpg";
import slide2 from "./slide-2.jpg";
import slide3 from "./slide-3.jpg";
import slide4 from "./slide-4.jpg";
import slide5 from "./slide-5.jpg";
import slide6 from "./slide-6.jpg";

export const slide = [slide1, slide2, slide3, slide4, slide5, slide6]
export const slideByIndex = index => slide[index % slide.length]