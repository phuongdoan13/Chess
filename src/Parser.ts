
class Parser{
  private static instance: Parser;

  private constructor(){}

  public static getInstance(): Parser {
    if (!Parser.instance) {
        Parser.instance = new Parser();
    }
    return Parser.instance;
  }

  private promptMove(currentPlayer: string ): string{
    var move = prompt('Player ' + currentPlayer + ' please input your move: ');
    return "Thank you for inputting your move";
  }

  private checkIfInputIsStandardized(move: string): boolean{
    if(move.length <= 2){
      return false;
    }
    const regexPawnMove = new RegExp("^[a-h][1-8]$");
    const regexOthersMove = new RegExp("^[KQRBN][a-h][a-h][1-8]$");
    return regexPawnMove.test(move) || regexOthersMove.test(move);
  }
}