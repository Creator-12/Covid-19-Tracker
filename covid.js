 const APIURL ="https://corona.lmao.ninja/v2/countries/india";

  async function getRecords(url){
    const response = await fetch(url);
   const resData = await response.json();
//    console.log(resData);
showRecords(resData);
 }
 getRecords(APIURL);
 function showRecords(record)
{
   //  console.log(record);
   document.getElementById("main").innerHTML=
`


<h2>Cases</h2>

<div>
<h3>today cases</h3>
<div>${record.todayCases}</div>
</div>
<div>
<h3>active cases</h3>
<div>${record.active}</div>
</div>
<div>
<h3>Total no. of cases in India</h3>
<div>${record.Cases}</div>
</div>
<div>
<h3>Total no. of cases per one million</h3>
<div>${record.casesPerOneMillion}</div>
</div>
<div>
<h3>Total recovered cases</h3>
<div>${record.recovered}</div>
</div>
<div>
<h3>Total no. of deaths in India</h3>
<div>${record.deaths}</div>
</div>
<div>
<h3>Total deaths due to corona today</h3>
<div>${record.todayDeaths}</div>
</div>


`


}