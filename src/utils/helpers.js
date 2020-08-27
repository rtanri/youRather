export function formatDate (timestamp) {
  const d = new Date(timestamp);
  var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                "Aug", "Sep", "Oct", "Nov", "Dec" ];
  var monthName = month[d.getMonth()]
  var year = d.getFullYear()
  const time = d.toLocaleTimeString('en-US')
  return  monthName + ' ' + year + ' | ' + time.substr(0, 5) + time.slice(-2)
}