const themes_controller = {
  vectors: "vectors_bar",
};

const vectors_controller = {
  create_vector: "vector_inputs",
  create_point: "point_inputs"
};

function render_chosen_theme(chosen_theme, e) {
  const themes_bar = document.querySelectorAll(".themes_bar_item");

  themes_bar.forEach((bar) => bar.classList.add("is_hidden"));

  const enable_bar = document.getElementsByClassName(chosen_theme)[0];

  console.log(enable_bar);

  enable_bar.classList.remove("is_hidden");

  console.log(enable_bar.classList);
}

function connect_themes_buttons() {
  const theme_card = document.querySelectorAll(".theme_card");

  theme_card.forEach((element) => {
    console.log(element);

    console.log(element.dataset.topic);

    const chosen_theme = themes_controller[element.dataset.topic];

    element.addEventListener("click", (e) =>
      render_chosen_theme(chosen_theme, e),
    );
  });
}

function connect_tools_buttons() {
  tools_buttons = document.querySelectorAll(".tools_button");
  tools_buttons.forEach((tools_button) => {
    tools_button.addEventListener("click", (e) => {
      const input_items = document.querySelectorAll(".input_item");
      input_items.forEach((input_item) =>
        input_item.classList.add("is_hidden"),
      );
      const chosen_theme = vectors_controller[tools_button.dataset.topic];
      document
        .getElementsByClassName(chosen_theme)[0]
        .classList.remove("is_hidden");
    });
  });
}

connect_themes_buttons();

connect_tools_buttons();
