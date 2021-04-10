var canvas = new fabric.Canvas("mycanvas");

player_x = 10;
player_y = 10;

any_player_width = 30;
any_player_height = 30;

var player_object = "";
var any_player_object = "";

function playerupdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(100);
        player_object.scaleToHeigth(120);
        player_object.set({
            top: player_y,
            player_x

        });
        canvas.add(player_object);
    });


}

function newimage(getimage) {
    fabric.Image.fromURL(getimage, function (Img) {
        any_player_object = Img;
        any_player_object.scaleToWidth(any_player_width);
        any_player_object.scaleToHeigth(any_player_height);
        any_player_object.set({
            top: player_y,
            player_x

        });
        canvas.add(any_player_object);
    });


}
window.addEventListener("keydown", lokesh);

function lokesh(e) {
    var keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '70') {
        newimage("ironman_face.png");
        console.log("f");

    }

    if (keypressed == '66') {
        newimage("spiderman_body.png");
        console.log("b");

    }

    if (keypressed == '76') {
        newimage("hulk_legs.png");
        console.log("l");

    }

    if (keypressed == '82') {
        newimage("thor_right_hand.png");
        console.log("r");

    }

    if (keypressed == '72') {
        newimage("captain_america_left_hand.png");
        console.log("h");

    }

    if (keypressed == '38') {
        up();
        console.log("up");

    }

    if (keypressed == '40') {
        down();
        console.log("down");

    }

    if (keypressed == '37') {
        left();
        console.log("left");

    }

    if (keypressed == '39') {
        right();
        console.log("right");

    }
}

