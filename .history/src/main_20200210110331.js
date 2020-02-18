import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}
import ".scripts/heade.menu"
import "./scripts/skills";
import "./scripts/works";
import "./scripts/reviews";