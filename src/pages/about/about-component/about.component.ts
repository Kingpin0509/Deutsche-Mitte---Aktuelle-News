import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutComponent {

  constructor(
  public navCtrl: NavController,
  public alerCtrl: AlertController) {}
  doAlertAussenpolitik() {
    let alert = this.alerCtrl.create({
      title: 'Aussenpolitik',
      message: '<p>Mit Augenmaß, gut abgestimmt mit Partnern und Freunden und ohne großen Wirbel verlässt Deutschland die Euro-Gruppe – nicht als erstes Land, um Missstimmung zu vermeiden, jedoch als zweites. Der Vertrag von Lissabon, über den die Bevölkerung nicht abstimmen durfte, wird nachträglich einem Volksentscheid unterworfen und im Ablehnungsfalle selbstverständlich aufgekündigt. Gleichzeitig legt die Bundesregierung abgesprochene Vorschläge für eine umfassende EU-Reform vor. Europa wird gestärkt und deutlich demokratisiert, mit mehr Mitbestimmung durch die Euro-Völker, Wahl aller Gremien, Beendigung der Entscheidungsmacht der jetzigen EUKommission. Notfalls kann Deutschland auch die EU verlassen. Die Deutsche Mitte fördert die eigenständige Sanierungskraft hoch verschuldeter Euro-Länder. Zahlungen an verschuldete Euro-Länder erfolgen nur noch gegen dreifache Sicherheitsleistung, ab Förderbeträgen von insgesamt mehr als 20% des betreffenden Bundeshaushalts ausschließlich nach Zustimmung der eigenen und der Empfänger-Bevölkerung.</p><p>Mit der Förderung internationaler Gewerkschaftspolitik gehen wir auf die große Mehrzahl der Menschen in aller Welt zu. Völkerrecht geht vor Handelsrecht. Darüber dürfen sich Handelsverträge nicht hinwegsetzen: Weg mit TTIP, CETA, TISA!</p><p>Die Deutsche Mitte tritt weltweit für gerechten Frieden ein. Ungerechte und sinnlose Sanktionen werden beendet. Keine Abenteuer-Politik bei Regierungswechseln in anderen Ländern (Libyen, Syrien, Ukraine), grundsätzliche Beachtung der Nichteinmischung in die inneren Angelegenheiten anderer Länder. Gerechten Frieden fördert die Deutsche Mitte auch in Nahost, eine deutsche Staatsräson für die Sicherheit Israels lehnen wir ab. Grundsätzlich gilt für Palästina die Ein-Staaten-Lösung nach südafrikanischem Vorbild und bei vollem Rückkehrrecht aller Palästinenser als erstrebenswert, damit wäre die Regierung palästinensisch geprägt. Zwischenschritte wie die „Zwei-Staaten-Lösung“ werden selbstverständlich ebenfalls unterstützt.</p><p>Zur Friedenssicherung wird Deutschland unverzüglich seine Truppen aus der NatoStruktur so lange herausziehen, bis die Nato sämtliche Einsätze außerhalb des NatoGebiets beendet hat. Sollte die Nato nicht binnen zwei Jahren wieder ein reines Verteidigungsbündnis werden, muss der Nato-Austritt erfolgen. Deutsche Soldaten werden aus dem Nicht-Nato-Ausland („out of area“) abgezogen und verbleiben fortan ausschließlich im Nato-Gebiet. Gleichzeitig werden schrittweise alle ausländischen Truppen aus Deutschland abgezogen, einschließlich aller Waffen, insbesondere: Atomwaffen. Truppeneinsätze benötigen künftig bessere Strategien. Wir sind und bleiben enge Freunde und Verbündete unserer EU-Nachbarn und Nato-Partner, diese Beziehungen wollen wir vorrangig besonders pflegen, vor allem im Interesse der Völker – doch deutsche Außenpolitik kann mehr als nur Nato-Bündnis- oder EU-Politik. Mit Russland und anderen Staaten oder Staatengruppen werden friedenswahrende Rückversicherungsverträge abgeschlossen.</p>',
      buttons: ['Ok']
    });
    alert.present()
  }
  doAlertInnenpolitik() {
    let alert = this.alerCtrl.create({
      title: 'Innenpolitik',
      message: '<p>Wir wollen mehr und besser bezahlte Polizisten, die wir persönlich kennen: als „Revierbeamte“ mit erhöhter Straßenpräsenz. Geheimdienste sollen besser und ehrlicher zum Wohl der Bevölkerung arbeiten, das allein sichert das Land.</p><p>Ein neues Ausländergesetz bringt klare Einwanderungsregeln mit niedrigen Obergrenzen! Massenzuwanderung unterbinden wir an den Außengrenzen, vor allem mit Friedenspolitik sowie durch politische, wirtschaftliche und humanitäre Hilfe in Ursprungs- und Erstaufnahmeländern. Rechtmäßige Einwanderer wollen wir besser behandeln und integrieren: schulen, in Lohn und Brot bringen, schneller einbürgern. Migranten ohne Integrationsbereitschaft werden zurückgewiesen. Die Bildung von Migrantenvierteln wird tatkräftig unterbunden. Null Toleranz bei rassistischen Übergriffen. Soweit Asylsuchende in ihren Herkunftsländern eine akute Bedrohung ihrer Menschenrechte erleiden oder befürchten müssen, erhält die Bundesregierung eine verbesserte Handlungsbasis. Kriminelle Banden werden wirksam bekämpft.</p> <p>Mehr Volksinitiativen und Volksentscheide bei wichtigen Fragen in Bund und Land. Staatliches Entscheiden und Handeln muss Internet-basiert transparent und viel besser öffentlich kontrollierbar werden! Den Überwachungsstaat werden wir beenden – Spionage von außen nicht mehr dulden. Mehr soziale, ethische Sportförderung!</p>',
      buttons: ['Ok']
    });
    alert.present()
  }
  doAlertFinanzen() {
    let alert = this.alerCtrl.create({
      title: 'Finanzen',
      message: '<p>Banken werden ehrliche Dienstleister, Zockerei wird verboten, Zins und Zinseszins werden abgeschafft. Marode Banken werden vorübergehend verstaatlicht und teilweise in kontrollierten Konkurs gehen. Manager haften für Fehlverhalten, Betrug wird strenger bestraft. Wir fordern die Trennung von Geschäfts- und Investmentbanken und eine Börsentransaktionssteuer, um Großspekulanten einzubremsen. Diese Schritte werden international abgestimmt, durchgesetzt und eingeführt, genau wie das Verbot von Spekulantentricks: Derivate, Leerverkäufe und Termingeschäfte. Künftig darf nie wieder eine nationale Währung Weltleitwährung sein! Wir fordern stattdessen eine zusätzliche, fair und staatsunabhängig verwaltete weltweite Ausgleichswährung. Steuern werden vereinfacht und auf lange Sicht zum Großteil abgeschafft. Auf dem Wege dahin motivieren wir Superreiche, Mega-Erben und Großkonzerne, soziales Mäzenatentum stärker zu unterstützen. Verschwendung öffentlicher Mittel wird strenger geahndet und wirkungsvoller vermieden.</p><p>Die Deutsche Mitte fordert den Erhalt des Bargeldes, bringt die D-Mark zurück und fördert alternative und regionale Währungen ebenso wie Tauschringe.</p><p>Die „Monetative“ (nach Prof. Dr. Bernd Senf) verbietet Geldschöpfung durch Regierung oder private Einrichtungen und legt dieses Privileg ausschließlich in die Hände einer reformierten und wirklich unabhängigen Bundesbank. Dieses Prinzip ist eingebettet in das ebenfalls verfolgte „Viergliederungsprinzip“ (nach Prof. Dr. Johannes Heinrichs) und angelehnt an das „Dreigliederungsprinzip“ (nach Dr. Rudolf Steiner).</p><p>Sämtliche tiefgreifende Reformen erfolgen ausschließlich in gründlicher und tatsächlich unabhängiger wissenschaftlicher und praxisnaher Vorbereitung und Begleitung.</p>',
      buttons: ['Ok']
    });
    alert.present()
  }
  doAlertWirtschaft() {
    let alert = this.alerCtrl.create({
      title: 'Wirtschaft und Technologie',
      message: '<p>Wirtschaft dient allen Menschen, dies ist ebenfalls Aufgabe der Politik: Unternehmen, die sozial, ökologisch, menschenfreundlich und flexibel arbeiten (Gemeinwohlökonomie) erhalten finanzielle Erleichterungen. Familienunternehmen, Genossenschaften und Stiftungen sowie Mitarbeiterbeteiligung werden ebenso gefördert wie Solidität und Stabilität der Unternehmensfinanzen – auch durch die Bildung stiller Reserven. Förderung lokaler Wirtschaft und handwerklicher Eigenproduktion. Förderung von Open-Source-Ökonomie.</p><p>Geeignete, neue Technologien und Erfindungen werden gefördert und schneller in Produkte umgesetzt. Entsprechend zügig erfolgt der komplette Atom-Ausstieg, danach werden auch fossile Energieträger durch neue Technik und 100% erneuerbare Energien ersetzt (Energieautonomie). Sofortiges Ende der Wiederaufarbeitung von Brennelementen. Unterdrückung von Erfindungen aus eigensüchtigen Motiven sowie Kartellbildung werden nicht mehr geduldet und wirksam unterbunden. Offenlegung aller Geheimdokumente über außerirdische Lebensformen und Technologien.</p><p>Eingebaute Produktalterung (Obsoleszenz) wird ein Straftatbestand, die Mindestgarantiefrist auf drei Jahre verlängert, so fördern wir Wertarbeit und den Verzicht auf Billigprodukte. Schutz vor Spionage und Benachteiligung im Ausland, besserer Übernahmeschutz, Ende sinnloser internationaler Sanktionspolitik.</p>',
      buttons: ['Ok']
    });
    alert.present()
  }
  doAlertArbeit() {
    let alert = this.alerCtrl.create({
      title: 'Arbeit und Soziales',
      message: '<p>Jeder arbeitsfähige Mensch geht einer Beschäftigung nach. In einer Vorphase vor Einführung des Bedingungslosen Grundeinkommens (BGE) steht das Solidarische Grundeinkommen (SGE): Beim SGE erhalten alle Beschäftigungslosen eine Liste der in ihrer Umgebung tätigen gemeinnützigen Organisationen. Wer Grundeinkommen erhalten will, wählt den künftigen Wirkungskreis aus und nimmt seine Tätigkeit auf – oder setzt mit amtlicher Zustimmung eigene Ideen um. Auch unentgeltliche gemeinnützige Tätigkeiten, wie die Betreuung von Kindern, Alten oder Kranken, sichern das SGE: nach aktuellen Maßstäben 1.200 €. Nach der Phase des SGE folgt etwa 3-5 Jahre später das BGE für alle. Ziel: Sinnvolle Arbeitswelten für alle gemäß ihren Wünschen und Fähigkeiten frei von Existenzproblemen. Dadurch werden Billiglöhne und Schein-Leiharbeit unterbunden. SGE und BGE gibt es nur für deutsche Staatsbürger. Ältere Menschen erhalten umfangreiche Unterstützung.</p><p>Volle Gleichberechtigung der Geschlechter bei Einstellung, Einkommen und Aufstiegschancen. Wesentlich mehr Eingliederungschancen - vor allem für junge Mütter nach dem 3. Lebensjahr ihrer Kinder. Familien erhalten großzügige Förderung.</p><p>Das Auseinanderdriften von Arm und Reich wird gestoppt und zurückgefahren. Die Solidarität aller Menschen untereinander wird gestärkt.</p>',
      buttons: ['Ok']
    });
    alert.present()
  }
  doAlertVerteidigung() {
    let alert = this.alerCtrl.create({
      title: 'Verteidigung',
      message: '<p>Die neue Verteidigungsstrategie lautet: „Full Spectrum Defense“ – und stellt sicher, dass Deutschland auf jedem Gebiet – entweder eigenständig oder im Verbund mit anderen Nationen – abschreckend verteidigungsfähig wird. Die Bundeswehr erhält insgesamt eine strukturelle Nichtangriffsfähigkeit. Eine reine Berufsarmee ist mit der bewährten Idee des Bürgers in Uniform schwer vereinbar. Die großen Herausforderungen der Zukunft, auch an die künftig erweiterte Freiheit und Mitsprache der Bürger, sind deshalb bei einer Wehrpflichtarmee mit starken professionellen Anteilen besser aufgehoben: Deutschland kehrt zu diesem Modell zurück. Das bewährte Prinzip der Inneren Führung sowie die Gewissensfreiheit der Soldaten werden wieder bestärkt.</p><p>Wer keinen Wehrdienst leistet, wird zu einem Sozialen oder Ökologischen Jahr nach eigener Wahl verpflichtet. Die Bundeswehr wird eine starke, gut gerüstete, mobile und vernetzte Verteidigungsarmee – mit voller Solidarität aller Bürger. Bundeswehreinsätze im Inneren sind ausgeschlossen – auch in anderen Ländern.</p>',
      buttons: ['Ok']
    });
    alert.present()
  }
  doAlertBildung() {
    let alert = this.alerCtrl.create({
      title: 'Bildung und Forschung',
      message: '<p>Große Investitionen in Bildung und Forschung machen Deutschland wieder zur führenden Nation in diesem Bereich.</p><p>Die elterliche Kindererziehung bis zum Erreichen des dritten Lebensjahres wird finanziell kräftig gefördert. Schulklassen unter 20 Kinder, große Erweiterungen bei den Universitäten, aufgestockte Budgets in der Forschung. Deutlich bessere bauliche und technische Ausstattungen überall. Förderung betrieblicher Verzahnung und deutlich mehr wissenschaftliche Freiheit und Unabhängigkeit gehören unbedingt zusammen: mit transparenter Finanzierung sowie allgemein zugänglichen Forschungsergebnissen.</p><p>Wir fordern die Abschaffung von Schulzwang und das Recht auf freies Lernen, Förderung selbstbestimmter, praxisbezogener, erlebnisorientierter Bildungsformen – mit Ergebniskontrolle. Die Disziplin Bildungswissenschaften setzen wir völlig neu auf.</p><p>Wir fordern unabhängige, dem Gemeinwohl verpflichtete Mediennetzwerke mit transparenter Berichterstattung, die Abschaffung des Zwangsbeitrags zur Finanzierung des öffentlich-rechtlichen Rundfunks und ein Verbot der Zusammenarbeit zwischen Meldebehörden und Gebühreneinzug.</p>',
      buttons: ['Ok']
    });
    alert.present()
  }
  doAlertFamilie() {
    let alert = this.alerCtrl.create({
      title: 'Familie, Senioren, Frauen und Jugend',
      message: '<p>Großzügige Förderung von Familien mit Kindern, auch durch kostenlose Paar-, Eltern- und Familienberatung. 50% mehr Kindergeld, zusätzlich erhalten Eltern nach aktuellen Maßstäben 5.000 € für das erste Kind, je 10.000 € für jedes weitere Kind – alle Leistungen sind anrechnungsfrei und pfändungssicher. Homo-Ehe: ja - Adoptionen nur als gut begründete Ausnahmen, vor allem bei leiblichen Kindern! Förderung der individuellen, spontanen und natürlichen Geburt, Aufwertung des Berufs der Hebammen, mehr Unterstützung für junge Mütter. Frauen erhalten auf Wunsch Hilfe für den Wiedereinstieg in den Beruf. KiTa-Plätze für alle Kinder ab drei Jahren, bessere Personalausstattung von Erziehungseinrichtungen.</p><p>„Gender Mainstreaming“, die Gleichmachung der Geschlechter, wird nicht mehr gefördert, gleichwohl sind Mann und Frau Träger gleicher unveräußerlicher Rechte.</p><p>Die Deutsche Mitte fördert Großfamilien und Mehrgenerationsgemeinschaften, in denen ältere Menschen geachtet werden und in der Gemeinschaft ihren Wünschen und Fähigkeiten entsprechend Aufgaben bis zu ihrem Lebensende erfüllen. Senioren werden auf Wunsch besser betreut, mit mehr Personal und deutlich besserer Alterssicherung!</p><p>Jugendarbeit vertritt die Interessen der Jugend bei der Entdeckung und Entwicklung ihrer Persönlichkeit und fördert Selbstorganisation, Eigenaktivität und verantwortungsvolle Teilhabe der Jugendlichen an der Gemeinschaft.</p>',
      buttons: ['Ok']
    });
    alert.present()
  }
  doAlertUmwelt() {
    let alert = this.alerCtrl.create({
      title: 'Umwelt, Naturschutz und Reaktorsicherheit',
      message: '                <p>Die Deutsche Mitte sieht den Menschen in der hohen Verantwortung, die natürlichen Grundlagen für alle Lebensformen zu bewahren. Darum erhalten Umwelt- und Naturschutz bedeutenden Vorrang. Stärkung und Weiterentwicklung der Nationalen Naturlandschaften, mehr Wildnisgebiete (min. 2% der Landesfläche), bessere Betreuung der Schutzgebiete, Förderung nachhaltiger und naturschonender Landnutzung. Selbständige Regulation der Wildtiere hat Vorrang vor der Jagd. Schaffung lokaler Stoff- und Energiekreisläufe, Abschaffung des Anschlusszwangs an die Kanalisation bei kontrolliertem Betrieb eigener Abwasserreinigung, Umstieg von zentraler auf dezentrale Energieversorgung mit Ausbau regenerativer und alternativer Energieversorgung (Energieautonomie).</p><p>Verbot der künstlichen Beeinflussung der Atmosphäre und jeglichen Geo-Engineerings – außer zu Verteidigungszwecken bei entsprechender Bedrohungslage.</p><p>Umweltkriminalität wird stärker verfolgt und bestraft, Fracking grundsätzlich verboten.</p>',
      buttons: ['Ok']
    });
    alert.present()
  }
  doAlertNahrung() {
    let alert = this.alerCtrl.create({
      title: 'Ernährung, Landwirtschaft und Verbraucherschutz',
      message: '<p>Die Deutsche Mitte fordert das Recht auf natürlich gesunde Lebensmittel. Schrittweise Umstellung auf ökologische, pestizid- und gentechnikfreie Landwirtschaft (Mindeststandard: Bioland). Dies geschieht freiwillig und mit finanzieller Förderung. Junge Menschen helfen dabei in ihrem sozialen/ökologischen Jahr und erlernen so den Bezug zur Natur. Wir fördern die unabhängige, regionale Agrarproduktion in Familienbetrieben und Genossenschaften: Landwirte sollen ohne EU-Diktat handeln und die volle Ernährungssouveränität zurückerhalten. Zudem erhält jeder volljährige Bürger das Recht, ein kostenloses Grundstück mit einer Größe von 400 m² als Privateigentum zu erhalten und frei zu bewirtschaften (=> 9,1% der Landesfläche).</p><p>Förderung nachhaltiger Land- und Forstbewirtschaftung, die sich an der Biodiversität orientiert. Schutz und Regeneration von Böden mit nachhaltigem Humusaufbau und der Bienenvölker als natürliche Lebensgrundlage. Ganzjährige grüne Bedeckung aus nutzbaren Pflanzen wird erste Regel der Landwirtschaft.</p><p>Bewahrung und Förderung altbewährten Saatgutes und dezentraler Saatguterzeugung. Keine Patentrechte auf Lebewesen oder Samen. Der Nahrungsmittelstandard Codex Alimentarius wird nachhaltig und ökologisch ausgerichtet. Die Zulassung für gentechnisch veränderte Pflanzen widerspricht aktuellen wissenschaftlichen Erkenntnissen und ist deshalb abzulehnen. Die Haftung aller Beteiligten bei Prüf- und Zulassungsverfahren muss ebenso zur Pflicht werden wie die positive Kennzeichnung gentechnisch veränderter Produkte! Wir fordern artgerechte Tierhaltung und Fütterung und somit Abschaffung der bisherigen Massentierhaltung. Dabei erfolgen sämtliche Umstellungen in enger Abstimmung mit allen Beteiligten.</p><p>Wasserversorgung und andere Naturgüter gehören nicht in Konzernhände! LobbyEingriffe in Verbraucher- und Naturschutz werden verboten, die Unabhängigkeit der Forschung wird bestärkt und kontrolliert.</p>',
      buttons: ['Ok']
    });
    alert.present()
  }
  doAlertGesundheit() {
    let alert = this.alerCtrl.create({
      title: 'Gesundheit',
      message: '<p>Die Deutsche Mitte strebt schrittweise eine kostenlose medizinische Grundversorgung für alle an. Wir stehen für ursachenbezogene ganzheitliche Heilkunde und natürliche Medizin, die sich am Menschen orientiert – bei deutlich gestärkter individueller Betreuung. Überteuerte Kartellmedizin wird durch wirkungsvollere, höherwertige und preisgünstigere natürliche Methoden ersetzt – wissenschaftlich untermauert. Aufbau ganzheitlicher Gesundheitszentren und Förderung von Solidargemeinschaften und alternativer Absicherungen im Krankheitsfall mit dem Recht auf freie Therapiewahl. Das ungerechte Abrechnungsverfahren wird stark vereinfacht. Die Zulassungsbedingungen für neue Impfstoffe, (nicht natürliche) Medikamente und Therapien werden verschärft, für zugelassene gilt eine Übergangsfrist. Die Haftungsbefreiung der Impfstoffhersteller sowie das Impf-Mobbing werden beendet.</p><p>Die wahren Krankheitsursachen wie z. B. Pestizide, Umwelt- und Medikamentengifte, Elektrosmog, Junk-Food oder Luftverschmutzung werden identifiziert und Schritt für Schritt beseitigt. Profitorientierung hat im Gesundheitswesen nichts verloren.</p><p>Krankenhäuser, Pflegeheime und Psychiatrien werden personell aufgestockt, die Bezahlung verbessert und menschliche Zuwendung aufgewertet. Selbstverwaltung wird allgemein gefördert. Strengere Grenzwerte für Elektrosmog und Radioaktivität.</p>',
      buttons: ['Ok']
    });
    alert.present()
  }
  doAlertVerkehr() {
    let alert = this.alerCtrl.create({
      title: 'Verkehr, Bau und Stadtentwicklung',
      message: '<p>Voll-Ausbau der Bahn zum großen LogistikDienstleister, keine Privatisierung, stattdessen Zusammenarbeit mit Privatfirmen, deutlich weniger und kleinere LKW auf den Straßen. Großprojekte mit enger Einbindung der Bevölkerung. Grünere Städte, „essbare Städte“ (Nutzpflanzen für die Allgemeinheit auf öffentlichen Grünflächen). Reform der Energieeffizienzpolitik. Ökologisches Bauen mit modernen Methoden und Techniken nach baubiologischen Standards – und mit strikt sozialfreundlicher Zielsetzung und Strategie, auch innerhalb einzelner Bauprojekte. Förderung regionaler Selbstverwaltung, keine Privatisierung kommunaler und staatlicher Basisaufgaben! Regional unabhängige Wasser-, Strom- und Wärmeversorgung.</p>',
      buttons: ['Ok']
    });
    alert.present()
  }
  doAlertEntwicklung() {
    let alert = this.alerCtrl.create({
      title: 'Wirtschaftliche Zusammenarbeit und Entwicklung',
      message: '<p> Fairer Handel ohne Diktate aus IWF und Weltbank. Internationale Unterstützungsleistungen werden künftig neben bisherigen Verfahren zusätzlich in verantwortlichen Patenschaften organisiert – und müssen kontrolliert und überprüfbar den Interessen und Bedürfnissen der empfangenden Völker dienen. Hilfe zur Selbsthilfe! Kontrollergebnisse sind öffentlich!</p>',
      buttons: ['Ok']
    });
    alert.present()
  }
  doAlertJustiz() {
    let alert = this.alerCtrl.create({
      title: 'Justiz',
      message: '<p>Recht darf kein Privileg der Wohlhabenden oder Mächtigen sein. Gerechtigkeit soll vor Gericht siegen. Ausbau des Justizwesens, weniger machtpolitischer Einfluss, mehr richterliche Unabhängigkeit, neue, ethische Richterwahlverfahren für Bundesgerichte, schnellere Verfahren. Reform des Strafrechts, weniger strenge Bestrafung von Kleinstkriminalität, weniger Haftstrafen, insbesondere bei Familien. Bürgerrechte und –schutz sind deutlich zu stärken.</p>',
      buttons: ['Ok']
    });
    alert.present()
  }
}