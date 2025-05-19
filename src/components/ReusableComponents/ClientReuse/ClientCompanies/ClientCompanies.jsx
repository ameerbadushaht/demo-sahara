import React from "react";

function ClientCompanies() {
  const clientLogos = [
    { id: 1, name: "Client 1", filename: "client1.png" },
  { id: 2, name: "Client 2", filename: "client2.png" },
  { id: 3, name: "Client 3", filename: "client3.png" },
  { id: 4, name: "Client 4", filename: "client4.png" },
  { id: 5, name: "Client 5", filename: "client5.png" },
  { id: 6, name: "Client 6", filename: "client6.png" },
  { id: 7, name: "Client 7", filename: "client7.png" },
  { id: 8, name: "Client 8", filename: "client8.png" },
  { id: 9, name: "Client 9", filename: "client9.png" },
  { id: 10, name: "Client 10", filename: "client10.png" },
  { id: 11, name: "Client 11", filename: "client11.png" },
  { id: 12, name: "Client 12", filename: "client12.png" },
  { id: 13, name: "Client 13", filename: "client13.png" },
  { id: 14, name: "Client 14", filename: "client14.png" },
  { id: 15, name: "Client 15", filename: "client15.png" },
  { id: 16, name: "Client 16", filename: "client16.png" },
  { id: 17, name: "Client 17", filename: "client17.png" },
  { id: 18, name: "Client 18", filename: "client18.png" },
  { id: 19, name: "Client 19", filename: "client19.png" },
  { id: 20, name: "Client 20", filename: "client20.jpg" },
  { id: 21, name: "Client 21", filename: "client21.png" },
  { id: 22, name: "Client 22", filename: "client22.png" },
  { id: 23, name: "Client 23", filename: "client23.png" },
  { id: 24, name: "Client 24", filename: "client24.png" },
  { id: 25, name: "Client 25", filename: "client25.png" },
  { id: 26, name: "Client 26", filename: "client26.png" },
  { id: 27, name: "Client 27", filename: "client27.png" },
  { id: 28, name: "Client 28", filename: "client28.png" },
  { id: 29, name: "Client 29", filename: "client29.png" },
  { id: 30, name: "Client 30", filename: "client30.png" },
  { id: 31, name: "Client 31", filename: "client31.png" },
  { id: 32, name: "Client 32", filename: "client32.png" },
  { id: 33, name: "Client 33", filename: "client33.png" },
  { id: 34, name: "Client 34", filename: "client34.png" },
  { id: 35, name: "Client 35", filename: "client35.png" },
  { id: 36, name: "Client 36", filename: "client36.png" },
  { id: 37, name: "Client 37", filename: "client37.png" },
  { id: 38, name: "Client 38", filename: "client38.png" },
  { id: 39, name: "Client 39", filename: "client39.png" },
  { id: 40, name: "Client 40", filename: "client40.png" },
  { id: 41, name: "Client 41", filename: "client41.png" },
  { id: 42, name: "Client 42", filename: "client42.png" },
  { id: 43, name: "Client 43", filename: "client43.png" },
  { id: 44, name: "Client 44", filename: "client44.png" },
  { id: 45, name: "Client 45", filename: "client45.png" },
  { id: 46, name: "Client 46", filename: "client46.png" },
  { id: 47, name: "Client 47", filename: "client47.png" },
  { id: 48, name: "Client 48", filename: "client48.png" },
  { id: 49, name: "Client 49", filename: "client49.png" },
  { id: 50, name: "Client 50", filename: "client50.png" },
  { id: 51, name: "Client 51", filename: "client51.png" },
  { id: 52, name: "Client 52", filename: "client52.png" },
  { id: 53, name: "Client 53", filename: "client53.png" },
  { id: 54, name: "Client 54", filename: "client54.png" },
  { id: 55, name: "Client 55", filename: "client55.png" },
  { id: 56, name: "Client 56", filename: "client56.png" },
  { id: 57, name: "Client 57", filename: "client57.png" },
  { id: 58, name: "Client 58", filename: "client58.png" },
  { id: 59, name: "Client 59", filename: "client59.png" },
  { id: 60, name: "Client 60", filename: "client60.png" },
  { id: 61, name: "Client 61", filename: "client61.png" },
  { id: 62, name: "Client 62", filename: "client62.png" },
  { id: 63, name: "Client 63", filename: "client63.png" },
  { id: 64, name: "Client 64", filename: "client64.png" },
  { id: 65, name: "Client 65", filename: "client65.png" },
  { id: 66, name: "Client 66", filename: "client66.png" },
  { id: 67, name: "Client 67", filename: "client67.png" },
  { id: 68, name: "Client 68", filename: "client68.png" },
  { id: 69, name: "Client 69", filename: "client69.png" },
  { id: 70, name: "Client 70", filename: "client70.png" },
  { id: 71, name: "Client 71", filename: "client71.png" },
  { id: 72, name: "Client 72", filename: "client72.png" },
  { id: 73, name: "Client 73", filename: "client73.png" },
  { id: 74, name: "Client 74", filename: "client74.png" },
  { id: 75, name: "Client 75", filename: "client75.png" },
  { id: 76, name: "Client 76", filename: "client76.png" },
  { id: 77, name: "Client 77", filename: "client77.png" },
  { id: 78, name: "Client 78", filename: "client78.png" },
  { id: 79, name: "Client 79", filename: "client79.png" },
  { id: 80, name: "Client 80", filename: "client80.png" },
  { id: 81, name: "Client 81", filename: "client81.png" },
  { id: 82, name: "Client 82", filename: "client82.png" },
  { id: 83, name: "Client 83", filename: "client83.png" },
  { id: 84, name: "Client 84", filename: "client84.png" },
  { id: 85, name: "Client 85", filename: "client85.png" },
  { id: 86, name: "Client 86", filename: "client86.png" },
  { id: 87, name: "Client 87", filename: "client87.png" },
  { id: 88, name: "Client 88", filename: "client88.png" },
  { id: 89, name: "Client 89", filename: "client89.png" },
  { id: 90, name: "Client 90", filename: "client90.png" },
  { id: 91, name: "Client 91", filename: "client91.png" },
  { id: 92, name: "Client 92", filename: "client92.png" },
  { id: 93, name: "Client 93", filename: "client93.png" }
  ];
  return (
    <>
      <section className="ClntLogos-contain">
        <div className="container">
          <div className="valuedClnts">
            <div className="row">


              {clientLogos.map((client) => (
                <div className="col-20 logoDiv" key={`client-${client.id}`}>
                  <div
                    className="ClntLogo"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                  >
                    <div className="clntImg">
                      <img
                        src={`/assets/Client/${client.filename}`}
                        alt={client.name}
                        loading="lazy" // Optional: lazy load images
                      />
                    </div>
                  </div>
                </div>
              ))}


            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientCompanies;
