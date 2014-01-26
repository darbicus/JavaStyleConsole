(function PjsConsole() {
  var PjsConsole = function () {
    var e = {};
    e.BufferMax = 50;
    e.wrapper = document.createElement("div");
    e.wrapper.setAttribute("style", "z-index:10000;opacity:.75;display:block;position:fixed !important;top:auto !

important;bottom:0px !important;left:0px;right:0px;height:50px;background-color:#aaa");
    e.dragger = document.createElement("div");
    e.dragger.setAttribute("style", "display:block;border:3px black raised;cursor:n-resize;position:absolute!

important;top:0px;left:0px;right:0px;height:5px;background-color:#333");
    e.closer = document.createElement("div");
    e.closer.onmouseover = function () {
      e.closer.style.setProperty("background-color", "#ccc");
    };
    e.closer.onmouseout = function () {
      e.closer.style.setProperty("background-color", "#ddd");
    };
    e.closer.innerHTML = "&#10006;";
    e.closer.setAttribute("style", "opacity:.5;display:block;border:3px black raised;position:absolute !

important;top:10px;right:30px;height:20px;width:20px;background-color:#ddd;color:#000;line-height:20px;text-

align:center;cursor:pointer;");
    e.javaconsole = document.createElement("div");
    e.javaconsole.setAttribute("style", "overflow-x: auto;display:block;position:absolute!

important;left:10px;right:0px;bottom:5px;top:10px;overflow-y:scroll;height:40px;");
    document.body.appendChild(e.wrapper);
    e.wrapper.appendChild(e.dragger);
    e.wrapper.appendChild(e.javaconsole);
    e.wrapper.appendChild(e.closer);
    e.dragger.onmousedown = function (t) {
      e.divheight = e.wrapper.style.height;
      if (document.selection) document.selection.empty();
      else window.getSelection()
        .removeAllRanges();
      var n = t.screenY;
      window.onmousemove = function (t) {
        e.wrapper.style.height = parseFloat(e.divheight) + (n - t.screenY) + "px";
        e.javaconsole.style.height = parseFloat(e.divheight) + (n - t.screenY) - 10 + "px";
      };
      window.onmouseup = function (t) {
        if (document.selection) document.selection.empty();
        else window.getSelection()
          .removeAllRanges();
        e.wrapper.style.height = parseFloat(e.divheight) + (n - t.screenY) + "px";
        e.javaconsole.style.height = parseFloat(e.divheight) + (n - t.screenY) - 10 + "px";
        window.onmousemove = null;
        window.onmouseup = null;
      };
    };
    e.BufferArray = [];
    e.print = e.log = function (t) {
      if (e.BufferArray[e.BufferArray.length - 1]) e.BufferArray[e.BufferArray.length - 1] += (t) + "";
      else e.BufferArray.push(t);
      e.javaconsole.innerHTML = e.BufferArray.join('<br/>');
      if (e.wrapper.style.visibility === "hidden") {
        e.wrapper.style.visibility = "visible";
      }
      if (e.wrapper.style.visibility === "hidden") {
        e.wrapper.style.visibility = "visible";
      }
    };
    e.println = function (t) {
      var oldheight = e.javaconsole.scrollHeight - e.javaconsole.scrollTop;
      e.BufferArray.push(t);
      e.javaconsole.innerHTML = e.BufferArray.join('<br/>');
      if (e.wrapper.style.visibility === "hidden") {
        e.wrapper.style.visibility = "visible";
      }
      if (e.BufferArray.length > e.BufferMax) e.BufferArray.splice(0, 1);
      else e.javaconsole.scrollTop = oldheight;
      if (e.wrapper.style.visibility === "hidden") {
        e.wrapper.style.visibility = "visible";
      }
    };
    e.showconsole = function () {
      e.wrapper.style.visibility = "visible";
    };
    e.hideconsole = function () {
      e.wrapper.style.visibility = "hidden";
    };
    e.closer.onclick = function () {
      e.hideconsole();
    };
    e.hideconsole();
    return e;
  };
  var $_PjsConsole = new PjsConsole();
  window.println = function println(e) {
    $_PjsConsole.println(e);
  };
  window.print = function print(e) {
    $_PjsConsole.print(e);
  };
})();
