"use strict";

const links = [
  "./playables/blingo/100_box.html",
  "./playables/blingo/choose_car.html",
  "./playables/hotel_mania/HM_1.html",
  "./playables/woodoku/duck.html",
  "./playables/woodoku/tetris.html",
  "./playables/freeplay/ride_master.html",
  "./playables/freeplay/snake_out_drag_ropes.html",
  "./playables/freeplay/zombie_apocalypse.html",
  "./playables/freeplay/paper_boy.html",
  "./playables/freeplay/idle_cutter_fruit.html",
  "./playables/freeplay/count_master_boss.html",
  "./playables/freeplay/twerk_race_wednesday.html",
  "./playables/freeplay/merge_def.html",
  "./playables/freeplay/snake_out_tangled_snakes.html",
  "./playables/blocktava/Ref_1_vertical.html",
  "./pet/pixi_pipes_puzzle.html"
];
const root = document.getElementById("root");

const createLinks = (arr, root) => {
  arr.forEach((link) => {
    const div = document.createElement("a");
    div.textContent = link.slice(2);
    div.setAttribute("href", link);
    root.append(div);
  });
};

createLinks(links, root);
