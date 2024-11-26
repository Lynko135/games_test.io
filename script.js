"use strict";

const links = [
  "./playables/woodoku_blast/classic_tetris.html",
  "./playables/woodoku_blast/massive_swan.html",
  "./playables/tile_dynasty/dynasty.html",
  "./playables/slt/slt_classic.html",
  "./playables/triple_tile/classic.html",
  "./playables/woodoku/duck.html",
  "./playables/woodoku/tetris.html",
  "./playables/woodoku/tetris_gem.html",
  "./playables/blingo/100_box.html",
  "./playables/blingo/choose_car.html",
  "./playables/blocktava/Ref_1_vertical.html",

  "./playables/freeplay/crazy_zombie.html",
  "./playables/freeplay/fly_challenge.html",
  "./playables/freeplay/paper_boy_dust.html",
  "./playables/freeplay/tile_trio_cafe.html",
  "./playables/freeplay/zombie_ppsh.html",
  "./playables/freeplay/zombie_pistol.html",
  "./playables/freeplay/ride_master.html",
  "./playables/freeplay/snake_out_drag_ropes.html",
  "./playables/freeplay/paper_boy.html",
  "./playables/freeplay/idle_cutter_fruit.html",
  "./playables/freeplay/count_master_boss.html",
  "./playables/freeplay/merge_def.html",
  "./playables/freeplay/snake_out_tangled_snakes.html",
  "./playables/freeplay/crazy_office_choose.html",
  "./playables/hotel_mania/HM_1.html",
  "./pet/pixi_pipes_puzzle.html",
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
