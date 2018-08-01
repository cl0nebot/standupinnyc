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
    <h3 className="title">
      <a href={show.checkoutUrl} target="_blank">{lineup}</a>
     </h3>
    <h4 className="subtitle">
      {format(show.startTime, 'dddd MM/DD h:mm a ')}
      at the <a target="_blank" href={show.venue.url}>{show.venue.name}</a> {price}
    </h4>
    <hr/>
    <style jsx> {`
      a {
        text-decoration: none;
      }
    `}</style>

  </div>)
}


export default ShowListItem
