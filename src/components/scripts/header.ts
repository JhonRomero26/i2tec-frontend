const $burgerBtn = document.querySelector(
  "#burger-button"
) as HTMLButtonElement;
const $navigator = document.querySelector("#header-navigator") as HTMLElement;
const $header = document.querySelector(".main-header") as HTMLElement;

const $cover = document.createElement("div");
$cover.classList.add("cover-protector");

const handleClickCover = function () {
  $navigator.classList.remove("translate-x-0");
  $header.removeChild($cover)
  $cover.removeEventListener("click", handleClickCover)
}

const handleClickButton = () => {
  $navigator.classList.toggle("translate-x-0");

  if ($navigator.classList.contains("translate-x-0")) {
    $header.appendChild($cover)
    $cover.addEventListener("click", handleClickCover)
  } else {
    handleClickCover()
  }
}


$burgerBtn.addEventListener("click", handleClickButton);