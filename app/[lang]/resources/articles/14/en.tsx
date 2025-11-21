import Image from "next/image";
import styles from "../article.module.css";
import illuEN from "../../../../../public/articles/14/banner_blog_upsignon_temoignage_Groupe_Deux_Mains_EN-1375x619px.jpg";

export function ENArticle() {
  return (
    <>
      <div className={styles.image}>
        <Image src={illuEN} alt="" unoptimized />
      </div>
      <h1>How Groupe Deux Mains Secures Its 300 Supplier Accounts with UpSignOn</h1>
      <h2>Presentation & Context</h2>
      <p>
        My name is Julienne Gaudebert. I am the director of the restaurant <em>Le Soulier</em> and deputy director of
        the Deux Mains group, which includes several restaurants such as <em>Aux Pieds Sous la Table</em>.
        <br />
        The Deux Mains group operates as a holding company: it centralizes all support functions for the various
        establishments.
        <br />
        It is the head-office team, made up of 5 people, who use UpSignOn on a daily basis.
      </p>
      <p>
        We had considered deploying it to all staff members, but this presented a risk: if someone left the company,
        they would still have access to all supplier passwords. We therefore decided to restrict usage to the office
        team.
      </p>
      <h2>Initial Context and Needs </h2>
      <p>
        Before UpSignOn, we used a password-protected Word document stored on SharePoint to share our passwords. It was
        neither practical nor secure.
        <br />
        We sometimes had a single password used across dozens of accounts — around{" "}
        <strong>300 different accesses</strong>.
      </p>
      <p>
        The need arose from a desire to better secure our data, especially against hacking risks.
        <br />
        The need arose from a desire to better secure our data, especially against hacking risks.
      </p>
      <p>We did not have any other tool in place before UpSignOn.</p>

      <h2>Implementation of the Solution </h2>
      <h3>Discovery and Choice of the Solution</h3>
      <p>
        I was not the one who selected the solution: our director discovered UpSignOn during a webinar organized by our
        accounting firm. The fact that UpSignOn is a <strong>french solution</strong> was
        <strong>a decisive factor</strong>: it aligned with our values and our need for
        <strong>sovereignty and GDPR compliance</strong>.
      </p>
      <h3>Deployment and Organization</h3>
      <p>
        I was the one who imported and organized all passwords in UpSignOn. Then we deployed it to the 5 members of the
        head-office team (one per department). I supported them during account creation, extension installation, and
        basic training. Today, everyone is fully comfortable using the tool.
      </p>
      <h3>Internal Structure</h3>
      <p>We organized our accesses into 6 main folders:</p>
      <ol>
        <li>Suppliers</li>
        <li>Cashiering</li>
        <li>Accounting / HR</li>
        <li>Sales / Communication</li>
        <li>Sales / Communication</li>
        <li>Miscellaneous folders (accounts to verify, automated passwords, etc.)</li>
      </ol>
      <br />
      <p>
        Within each folder, we created <strong>one subfolder per company in the group</strong>:
      </p>
      <ol>
        <li>The group (holding)</li>
        <li>Company 1</li>
        <li>Company 2</li>
        <li>Company 3</li>
      </ol>
      <br />
      <p>
        Each account is <strong>named “company – site”</strong> fro better readability.
      </p>
      <h3>Challenges Encountered</h3>
      <p>
        During a migration, we lost the folder structure, which required a<strong>complete manual rebuild.</strong>
        <br />
        We also had to <strong>change all passwords</strong> to make them more secure (a project carried out by an
        apprentice during the summer).
      </p>
      <h2>Daily Use </h2>
      <p>
        The primary use case is the secure storage and sharing of supplier accounts.
        <br />
        The most appreciated features are:
      </p>
      <ul>
        <li>
          <strong>Secure sharing</strong> between colleagues without sending passwords by email.
        </li>
        <li>
          The <strong>browser extenstion (Chrome)</strong>, considered <strong>very convenient</strong> for quick
          logins.
        </li>
        <li>
          <strong>Simplified password updates</strong>, without needing to notify everyone after each change.
        </li>
      </ul>
      <p>
        This enables <strong>greater autonomy</strong>: for example, the accounting team can connect to supplier
        accounts without going through me.
      </p>
      <h2>Suggested Improvements</h2>
      <ul>
        <li>
          <strong>Disable automatic password capture by default</strong>, considered “too intrusive.”.
        </li>
        <li>
          <strong>Display the folder containing</strong> each account directly in the browser pop-up.
        </li>
        <li>
          <strong>Allow new passwords to be assigned to a folder directly from the pop-up</strong>, without going
          through the main application.
        </li>
      </ul>
      <h2>Recommendation and Vision</h2>
      <p>
        For Julienne, <strong>UpSignOn is above all a tool for security and productivity:</strong>
        <cite>
          <strong>“It’s the combination of security and time savings that makes the solution so powerful.”</strong>
        </cite>
      </p>
      <p>She recommends the solution for:</p>
      <ul>
        <li>
          Its <strong>ease of use</strong> (once installed).
        </li>
        <li>
          Its <strong>secure and collaborative nature</strong>.
        </li>
        <li>
          Its <strong>French hosting and the support of the Septeo group.</strong>
        </li>
        <li>
          <strong>Continuous improvement</strong>
        </li>
      </ul>
      <br />
      <p>
        Julienne highlights the <strong>responsiveness of the UpSignOn team</strong>: her suggestions were{" "}
        <strong>taken into account in updates.</strong>
        <br />
        She appreciates this <strong>continuous-improvement mindset</strong>, aligned with the group’s culture.
      </p>
      <p>
        She notes, however, that <strong>initial setup</strong> requires some support for users who are{" "}
        <strong>less confortable with technology</strong>, but that daily use is very smooth.
      </p>
    </>
  );
}
