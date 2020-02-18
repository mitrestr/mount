import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}
import "./scripts/header.menu";
import "./scripts/skills";
import "./scripts/works";
import "./scripts/reviews";