import React, { Component } from "react";
 
class Manga extends Component {
  render() {
      return(
          <div className="mangaTitles">
                  <ul>
                      <li className="bleachManga">Bleach</li>
                      <li className="narutoManga">Naruto</li>
                      <li className="borutoManga">Boruto</li>
                      <li className="aotManga">Attack on Titan</li>
                      <li className="oneManga">One Piece</li>
                      <li className="fairyManga">Fairy Tale</li>
                      <li className="dbsManga">Dragon Ball Super</li>
                      <li className="inuyashaManga">Inuyasha</li>
                  </ul>
          </div>
      )
  }
      
}
 
export default Manga;