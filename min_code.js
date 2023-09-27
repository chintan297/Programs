let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wedensday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    console.log("Error..");
}
switch (
  (console.log(day), console.log("Sunday kab aayega"), new Date().getDay())
) {
  case 0:
    day = "Sunday to he brother";
  case 1:
  case 2:
    day = "Chala gya he";
    break;
  case 3:
  case 4:
    day = "Bichme he bhai tu";
    break;
  case 5:
  case 6:
    day = "Sunday Najik hi he";
    break;
  default:
    day = "Teri dictionary me Sunday hi nahi hee.";
}
console.log(day);
