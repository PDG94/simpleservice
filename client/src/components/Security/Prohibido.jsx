import React from "react";
import "../Security/prohibido.css";
import { Link } from "react-router-dom";

export default function Prohibido() {
  return (
    <div className="prohibitedMain">
      <Link className="backProhibited" to="/Create">
        Back
      </Link>
      <div className="prohibitedBox">
        <div className="containerProhibited">
          <h1 className="titleProhibited">Prohibited</h1>
          <h3 className="subProhibited">
            Users must comply with all applicable laws, and all posted site
            rules.
          </h3>
          <br />
          <h3 className="subProhibited">
            Here is a partial list of goods, services, and content prohibited on
            Simple Service:
          </h3>
          <br />
          <h6 className="hProhibited">
            Weapons; firearms/guns and components; BB/pellet, stun, and spear
            guns; etc.
          </h6>
          <hr className="hrPro" />
          <h6 className="hProhibited">
            Ammunition, clips, cartridges, reloading materials, gunpowder,
            fireworks, explosives.
          </h6>
          <hr className="hrPro" />
          <h6 className="hProhibited">
            Offers, solicitation, or facilitation of illegal prostitution and/or
            sex trafficking exploitation or endangerment of minors; child
            pornography.
          </h6>
          <hr className="hrPro" />
          <h6 className="hProhibited">
            Recalled items; hazardous materials; body parts/fluids; unsanitized
            bedding/clothing prescription drugs, medical devices; controlled
            substances and related items alcohol or tobacco; unpackaged or
            adulterated food or cosmetics.
          </h6>
          <hr className="hrPro" />
          <h6 className="hProhibited">
            Pet sales (re-homing with small adoption fee ok), animal parts, stud
            service.
          </h6>
          <hr className="hrPro" />
          <h6 className="hProhibited">
            Endangered, imperiled and/or protected species and any parts
            thereof, e.g. ivory false, misleading, deceptive, or fraudulent
            content; bait and switch; keyword spam offensive, obscene,
            defamatory, threatening, or malicious postings or email anyone's
            personal, identifying, confidential or proprietary information.{" "}
          </h6>
          <hr className="hrPro" />
          <h6 className="hProhibited">
            Food stamps, WIC vouchers, SNAP or WIC goods, governmental
            assistance stolen property, property with serial number
            removed/altered, burglary tools, etc.
          </h6>
          <hr className="hrPro" />
          <h6 className="hProhibited">
            ID cards, licenses, police insignia, government documents, birth
            certificates, etc.{" "}
          </h6>
          <hr className="hrPro" />
          <h6 className="hProhibited">
            Postings or email the primary purpose of which is to drive traffic
            to a website.
          </h6>
          <hr className="hrPro" />
          <h6 className="hProhibited">
            Postings or email offering, promoting, or linking to unsolicited
            products or services affiliate marketing; network, or multi-level
            marketing; pyramid schemes.
          </h6>
          <hr className="hrPro" />
          <h6 className="hProhibited">
            Any good, service, or content that violates the law or legal rights
            of others.
          </h6>
          <hr className="hrPro" />
          <h5 className="hProh">Flag anyone else you see doing so</h5>
          <br />
          <h4 className="hProhib">
            <b>
              Thanks for helping keep Simple Service safe and useful for
              everyone{" "}
            </b>
          </h4>
          <br />
        </div>
      </div>
    </div>
  );
}
