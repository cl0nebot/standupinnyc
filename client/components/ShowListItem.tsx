import {Show} from "../../server/src/generated/prisma"
import {format} from "date-fns"
interface ShowListItemProps {
  show: any;
}

function ComedianLink({comedian}) {
  return (<a href={comedian.website}></a>)
}

function ShowListItem(props: ShowListItemProps) {
  const {show} = props
  const lineup = show.comedians.map(comedian => comedian.name).join(", ")
  const price = show.price ? `$${show.price}` : "free"
  return (<div>
    <div>{format(show.startTime, 'dddd MM/DD h:mm a')}</div>
    <div><a target="_blank" href={show.venue.url}>{show.venue.name}</a></div>
    <div>{lineup}</div>
    <a href={show.checkoutUrl} target="_blank">get tickets for {price}</a>
    <br/>
  </div>)
}


export default ShowListItem
