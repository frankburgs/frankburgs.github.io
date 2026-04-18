const memorables = [
        {
            date: "15 Jun 2025",
            desc: "Loud gathering, past midnight"
        },
        {
            date: "22 Aug 2025",
            desc: "Music, loud gathering til 3 AM"
        },
        {
            date: "23 Aug 2025",
            desc: "til 2 AM"
        },
        {
            date: "25 Aug  2025",
            desc: "Loud conversations @ 4 AM"
        },
        {
            date: "5 Sep 2025",
            desc: "til 2 AM"
        },
        {
            date: "6 Sep 2025",
            desc: "til 2 AM"
        },
        {
            date: "11 Sep 2025",
            desc: "til 4:30 AM"
        },
        {
            date: "12 Sep 2025",
            desc: "til 4 AM"
        },
        {
            date: "13 Sep 2025",
            desc: "til 3 AM"
        },
        {
            date: "14 Sep 2025",
            desc: "possible violent incident"
        },
        {
            date: "17 Sep 2025",
            desc: "screaming @ 4 AM"
        },
        {
            date: "24 Sep 2025",
            desc: "@ 1 AM"
        },
        {
            date: "Oct 10 2025",
            desc: "all night"
        },
        {
            date: "Oct 11 2025",
            desc: "all night"
        },
        {
            date: "Oct 12 2025",
            desc: "loud music, loud group until ~ 2 AM"
        },
        {
            date: "16 Oct 2025",
            desc: "possible mental health incident"
        },
        {
            date: "19 Nov 2025",
            desc: "loud music, loud talking until 2 AM"
        },
        {
            date: "12 Apr 2026",
            desc: "Audible music, group gathering, 1:00 AM - 3:00 AM"
        }
]

export default function Noise(){

    const peaceAndQuiet = memorables.map((item, index) =>
        <tr key={index}>
            <td>{item.date}</td>
            <td>{item.desc}</td>
        </tr>
    );

    return (
        <table className="table table-hover">
            <tbody>
                {peaceAndQuiet}
            </tbody>
        </table>
    )
}