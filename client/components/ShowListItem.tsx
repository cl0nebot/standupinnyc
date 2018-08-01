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
  return (<div className="ShowListItem">
    <div>{format(show.startTime, 'dddd MM/DD h:mm a')}</div>
    <div><a target="_blank" href={show.venue.url}>{show.venue.name}</a></div>
    <h2>{lineup}</h2>
    <a href={show.checkoutUrl} target="_blank">get tickets for {price}</a>
    <br/>
    <style jsx> {`
      .ShowListItem {
        padding: 1.5em;
        font-size: 14px;
      }
    `}</style>

  </div>)
}


export default ShowListItem
