import Footer from "../components/Footer"
import { MobileNav, Navbar } from "../components/Navbar"

export const metadata = {
     title: "Conditions Générales de Vente — Gaël Tournier, Développeur Web Freelance",
     description:
          "Conditions générales de vente applicables aux prestations de développement web, applications, maintenance et conseil de Gaël Tournier.",
     alternates: { canonical: "/cgv" },
}

export default function Page() {
     return (
          <div className="bg-white h-screen md:flex">
               <Navbar />
               <MobileNav />
               <main className="flex flex-col md:flex-1 overflow-y-auto ml-4 pb-40 lg:pb-0">
                    <h1 className="bigtitle text-center mb-2">Conditions Générales de Vente</h1>
                    <p className="text-center opacity-60 mb-10">Version du 11 août 2026</p>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">1. Identification du prestataire</h2>
                         <p>
                              Les présentes conditions générales de vente (ci-après les «&nbsp;CGV&nbsp;») sont conclues
                              entre&nbsp;:
                              <br />
                              <strong>Gaël TOURNIER</strong>, entrepreneur individuel exerçant sous le régime de la
                              micro-entreprise, dont le siège est situé 22 Allée du Loiret, 31770 Colomiers (France),
                              immatriculé sous le numéro SIREN 105 820 930 (SIRET 105 820 930 00011), code APE 62.01Z —
                              Programmation informatique, joignable à l&#39;adresse{" "}
                              <a href="mailto:contact@gaeltournier.dev" className="underline">
                                   contact@gaeltournier.dev
                              </a>
                              , ci-après le «&nbsp;Prestataire&nbsp;»,
                              <br />
                              et toute personne physique ou morale passant commande, ci-après le «&nbsp;Client&nbsp;».
                         </p>
                         <p className="mt-3">
                              TVA non applicable, article 293 B du Code général des impôts. Les prix sont exprimés en
                              euros, nets de taxe.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">2. Objet et champ d&#39;application</h2>
                         <p>
                              Les présentes CGV régissent l&#39;ensemble des prestations fournies par le Prestataire,
                              notamment&nbsp;: la conception et le développement de sites web sur-mesure, le
                              développement d&#39;applications et de logiciels, les prestations de maintenance et
                              d&#39;assistance technique, ainsi que les missions de conseil et de direction de projet.
                         </p>
                         <p className="mt-3">
                              Toute commande implique l&#39;acceptation sans réserve des présentes CGV, qui prévalent
                              sur tout autre document du Client, en particulier ses conditions générales d&#39;achat. Le
                              devis signé et ses annexes (cahier des charges, spécifications) priment sur les présentes
                              CGV en cas de contradiction.
                         </p>
                         <p className="mt-3">
                              Certaines dispositions distinguent le Client <strong>consommateur</strong> (personne
                              physique agissant à des fins n&#39;entrant pas dans le cadre de son activité
                              professionnelle) du Client <strong>professionnel</strong>. Ces distinctions sont signalées
                              expressément.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">3. Devis et formation du contrat</h2>
                         <p>
                              Chaque prestation fait l&#39;objet d&#39;un devis détaillé, gratuit et valable trente (30)
                              jours à compter de son émission. Le contrat est formé à la date de réception par le
                              Prestataire du devis daté, signé et accompagné, le cas échéant, de l&#39;acompte prévu à
                              l&#39;article 5.
                         </p>
                         <p className="mt-3">
                              Toute demande d&#39;évolution ou d&#39;ajout de fonctionnalité non prévue au devis initial
                              fait l&#39;objet d&#39;un devis complémentaire soumis à acceptation préalable, et peut
                              entraîner une révision du calendrier de livraison.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">4. Droit de rétractation (Client consommateur)</h2>
                         <p>
                              Conformément aux articles L221-18 et suivants du Code de la consommation, le Client
                              consommateur ayant conclu le contrat à distance ou hors établissement dispose d&#39;un
                              délai de quatorze (14) jours à compter de la conclusion du contrat pour exercer son droit
                              de rétractation, sans avoir à motiver sa décision ni à supporter de pénalité.
                         </p>
                         <p className="mt-3">
                              Ce droit s&#39;exerce par toute déclaration dénuée d&#39;ambiguïté adressée à{" "}
                              <a href="mailto:contact@gaeltournier.dev" className="underline">
                                   contact@gaeltournier.dev
                              </a>
                              .
                         </p>
                         <p className="mt-3">
                              <strong>Exécution anticipée.</strong> Si le Client souhaite que la prestation débute avant
                              l&#39;expiration de ce délai, il doit en formuler la demande expresse et reconnaître
                              expressément qu&#39;il perdra son droit de rétractation une fois la prestation pleinement
                              exécutée. Cette double mention fait l&#39;objet, sur le devis, d&#39;une case à cocher
                              distincte et non pré-cochée. En cas de rétractation intervenant alors que la prestation a
                              commencé sans être achevée, le Client verse un montant proportionné à ce qui a été fourni
                              jusqu&#39;à la communication de sa décision, conformément à l&#39;article L221-25 du Code
                              de la consommation.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">5. Prix, facturation et paiement</h2>
                         <p>
                              Sauf mention contraire au devis, le règlement s&#39;effectue selon l&#39;échéancier
                              suivant&nbsp;: un acompte de trente pour cent (30&nbsp;%) ou d'un nombre de jours écrit
                              sur le devis en cas d'utilisation du TJM à la commande, le solde à la livraison. Pour les
                              projets d&#39;une durée supérieure à deux mois, un échéancier intermédiaire peut être
                              défini au devis.
                         </p>
                         <p className="mt-3">
                              Les factures sont payables par virement bancaire à trente (30) jours date de facture, sauf
                              stipulation différente au devis. Les éventuels frais bancaires liés au mode de paiement
                              choisi par le Client restent à sa charge. en cas de paiement en chèque, le délai de
                              travail ne commence qu&#39;après encaissement du chèqu et la somme devra être réglée
                              entièrement avant le début de la prestation.
                         </p>
                         <p className="mt-3">
                              <strong>Retard de paiement.</strong> Toute somme non réglée à l&#39;échéance donne lieu,
                              de plein droit et sans mise en demeure préalable, à des pénalités de retard calculées au
                              taux d&#39;intérêt appliqué par la Banque centrale européenne à son opération de
                              refinancement la plus récente, majoré de dix (10) points de pourcentage. Pour le Client
                              professionnel, s&#39;y ajoute une indemnité forfaitaire pour frais de recouvrement de
                              quarante euros (40&nbsp;€), conformément à l&#39;article L441-10 du Code de commerce, sans
                              préjudice d&#39;une indemnisation complémentaire sur justificatifs.
                         </p>
                         <p className="mt-3">
                              En cas de défaut de paiement persistant quinze (15) jours après mise en demeure restée
                              infructueuse, le Prestataire peut suspendre l&#39;exécution des prestations en cours après
                              en avoir informé le Client.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">6. Obligations et collaboration du Client</h2>
                         <p>
                              La bonne exécution des prestations suppose une collaboration active du Client. Celui-ci
                              s&#39;engage à fournir, dans les délais convenus, l&#39;ensemble des éléments nécessaires
                              (contenus, textes, images, accès techniques, identifiants, chartes graphiques) et à
                              désigner un interlocuteur unique habilité à valider les livrables.
                         </p>
                         <p className="mt-3">
                              Le Client garantit détenir les droits d&#39;exploitation des éléments qu&#39;il transmet
                              et garantit le Prestataire contre tout recours de tiers à ce titre. Tout retard imputable
                              au Client dans la fourniture de ces éléments ou dans les validations attendues décale
                              d&#39;autant le calendrier de livraison.
                         </p>
                         <p className="mt-3">
                              À défaut de retour du Client dans un délai de trente (30) jours suivant une demande de
                              validation, les livrables concernés sont réputés acceptés.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">7. Délais et livraison</h2>
                         <p>
                              Les délais figurant au devis sont communiqués à titre indicatif et courent à compter de la
                              réception de l&#39;acompte et de l&#39;intégralité des éléments mentionnés à l&#39;article
                              6.
                         </p>
                         <p className="mt-3">
                              <strong>Client consommateur.</strong> Conformément aux articles L216-1 et suivants du Code
                              de la consommation, à défaut d&#39;exécution à la date convenue, le Client peut enjoindre
                              au Prestataire d&#39;exécuter la prestation dans un délai supplémentaire raisonnable,
                              puis, à défaut, résoudre le contrat. Les sommes versées lui sont alors restituées,
                              déduction faite de la valeur des prestations effectivement réalisées et livrées.
                         </p>
                         <p className="mt-3">
                              <strong>Client professionnel.</strong> Un retard ne peut donner lieu à l&#39;allocation de
                              dommages et intérêts, ni à l&#39;annulation de la commande, sauf faute lourde du
                              Prestataire.
                         </p>
                         <p className="mt-3">
                              La livraison s&#39;entend de la mise à disposition du livrable au Client, par mise en
                              ligne sur l&#39;environnement convenu ou remise des fichiers et du code source.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">8. Recette et réception</h2>
                         <p>
                              À la livraison, le Client dispose d&#39;un délai de quinze (15) jours pour procéder à la
                              recette et signaler par écrit les non-conformités constatées par rapport au devis et au
                              cahier des charges. Le Prestataire procède aux corrections nécessaires dans un délai
                              raisonnable.
                         </p>
                         <p className="mt-3">
                              À l&#39;expiration de ce délai sans réserve écrite, ou en cas de mise en exploitation
                              effective du livrable par le Client, la réception est réputée acquise sans réserve.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">9. Propriété intellectuelle</h2>
                         <p>
                              Le Prestataire demeure titulaire de l&#39;intégralité des droits de propriété
                              intellectuelle sur les développements réalisés jusqu&#39;au paiement complet du prix. Le
                              potentiel transfert des droits n&#39;intervient qu&#39;à compter de l&#39;encaissement
                              intégral des sommes dues, si le devis le prévoit.
                         </p>
                         <p className="mt-3">
                              Après paiement intégral et si le devis le prévoit, le Prestataire cède au Client, à titre
                              exclusif et pour la durée légale de protection, les droits de reproduction, de
                              représentation, d&#39;adaptation et d&#39;exploitation des développements spécifiques
                              réalisés pour lui, pour le monde entier.
                         </p>
                         <p className="mt-3">
                              Sont expressément exclus de cette cession&nbsp;: les éléments tiers soumis à licence
                              propre (bibliothèques open source, polices, images, plugins, services tiers), dont les
                              conditions de licence respectives s&#39;appliquent&nbsp;; ainsi que les briques
                              logicielles, composants génériques, méthodes et savoir-faire préexistants du Prestataire,
                              sur lesquels le Client reçoit une licence d&#39;utilisation non exclusive, cessible avec
                              le livrable, pour les besoins de l&#39;exploitation de celui-ci.
                         </p>
                         <p className="mt-3">
                              Sauf refus écrit du Client, le Prestataire est autorisé à citer le projet et à en
                              présenter des visuels à titre de référence, sur son portfolio et dans ses supports de
                              présentation.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">10. Hébergement et noms de domaine</h2>
                         <p>
                              L&#39;hébergement et l&#39;enregistrement du nom de domaine ne sont pas compris dans les
                              prestations, sauf mention expresse au devis.
                         </p>
                         <p className="mt-3">
                              Lorsque ces éléments sont souscrits par le Client, celui-ci en assume seul la charge et la
                              responsabilité. Lorsqu&#39;ils sont souscrits par l&#39;intermédiaire du Prestataire,
                              celui-ci agit en simple intermédiaire&nbsp;: les conditions du prestataire tiers
                              s&#39;appliquent, le nom de domaine est enregistré au nom du Client qui en est
                              propriétaire, et la responsabilité du Prestataire ne saurait être engagée du fait
                              d&#39;interruptions, de pertes de données ou de défaillances imputables à ce tiers.
                         </p>
                         <p className="mt-3">
                              Il appartient au Client de veiller au renouvellement de ces services et à la conservation
                              de ses accès.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">11. Maintenance et assistance</h2>
                         <p>
                              La maintenance n&#39;est pas incluse dans les prestations de développement, sauf mention
                              contraire au devis, et fait l&#39;objet d&#39;un contrat distinct précisant son périmètre,
                              ses délais d&#39;intervention et sa tarification.
                         </p>
                         <p className="mt-3">
                              Une assistance à la prise en main et à la correction des anomalies imputables au
                              Prestataire est toutefois comprise pendant un (1) mois à compter de la réception, sans
                              préjudice des garanties légales visées à l&#39;article 12.
                         </p>
                         <p className="mt-3">
                              Toute intervention d&#39;un tiers ou du Client lui-même sur le code livré met fin de plein
                              droit à cette assistance ainsi qu&#39;à tout contrat de maintenance en cours, sauf accord
                              écrit préalable du Prestataire.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">12. Garantie légale de conformité</h2>
                         <p>
                              <strong>Client consommateur.</strong> Conformément aux articles L224-25-12 et suivants du
                              Code de la consommation, le Prestataire est tenu de la garantie légale de conformité des
                              contenus et services numériques fournis. Cette garantie s&#39;applique pendant deux (2)
                              ans à compter de la fourniture pour une fourniture ponctuelle, et pendant toute la durée
                              de fourniture pour une fourniture continue.
                         </p>
                         <p className="mt-3">
                              À ce titre, le Client peut exiger la mise en conformité sans frais et, à défaut, obtenir
                              une réduction du prix ou la résolution du contrat dans les conditions prévues par la loi.
                              Le Client bénéficie en outre de la garantie légale des vices cachés dans les conditions
                              des articles 1641 et suivants du Code civil.
                         </p>
                         <p className="mt-3">
                              Ces garanties légales s&#39;appliquent indépendamment de toute garantie commerciale
                              consentie et ne sauraient être limitées par les présentes CGV.
                         </p>
                         <p className="mt-3">
                              <strong>Exclusions.</strong> Ne constituent pas un défaut de conformité imputable au
                              Prestataire&nbsp;: les dysfonctionnements résultant d&#39;une utilisation non conforme,
                              d&#39;une modification opérée par le Client ou un tiers, d&#39;une évolution
                              d&#39;environnements ou de services tiers (navigateurs, API, dépendances, hébergeur), ou
                              d&#39;un défaut de mise à jour lorsque celle-ci incombe au Client.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">13. Responsabilité</h2>
                         <p>
                              Le Prestataire est tenu d&#39;une obligation de moyens dans l&#39;exécution des
                              prestations. Il met en œuvre les diligences et le savoir-faire conformes aux usages de la
                              profession.
                         </p>
                         <p className="mt-3">
                              <strong>Client professionnel.</strong> La responsabilité du Prestataire est limitée aux
                              dommages directs et prévisibles, et plafonnée au montant total hors taxes effectivement
                              perçu au titre de la prestation concernée. Sont exclus les dommages indirects, notamment
                              les pertes d&#39;exploitation, de chiffre d&#39;affaires, de clientèle, de données ou
                              d&#39;image.
                         </p>
                         <p className="mt-3">
                              <strong>Client consommateur.</strong> Aucune stipulation des présentes ne saurait avoir
                              pour effet d&#39;exclure ou de limiter la responsabilité légale du Prestataire. Les
                              limitations qui précèdent ne s&#39;appliquent pas au Client consommateur.
                         </p>
                         <p className="mt-3">
                              Dans tous les cas, la responsabilité du Prestataire ne peut être engagée en cas de faute
                              lourde ou intentionnelle du Client, ou de force majeure au sens de l&#39;article 1218 du
                              Code civil.
                         </p>
                         <p className="mt-3">
                              Il appartient au Client de mettre en place et de maintenir ses propres sauvegardes une
                              fois le livrable réceptionné.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">14. Confidentialité</h2>
                         <p>
                              Chaque partie s&#39;engage à préserver la confidentialité des informations et documents
                              auxquels elle accède dans le cadre du contrat, et à ne pas les divulguer à des tiers, sauf
                              obligation légale, pendant toute la durée du contrat et trois (3) ans après son terme.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">15. Données personnelles</h2>
                         <p>
                              Les données personnelles du Client sont traitées par le Prestataire, responsable de
                              traitement, aux fins d&#39;exécution du contrat, de facturation et de suivi de la relation
                              commerciale. Elles sont conservées pendant la durée de la relation contractuelle, puis
                              archivées conformément aux durées légales de conservation applicables, notamment en
                              matière comptable.
                         </p>
                         <p className="mt-3">
                              Le Client dispose des droits d&#39;accès, de rectification, d&#39;effacement, de
                              limitation, d&#39;opposition et de portabilité, qu&#39;il exerce à l&#39;adresse{" "}
                              <a href="mailto:contact@gaeltournier.dev" className="underline">
                                   contact@gaeltournier.dev
                              </a>
                              , ainsi que du droit d&#39;introduire une réclamation auprès de la CNIL.
                         </p>
                         <p className="mt-3">
                              Lorsque la prestation conduit le Prestataire à traiter des données personnelles pour le
                              compte du Client, les parties concluent une convention de sous-traitance conforme à
                              l&#39;article 28 du RGPD.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">16. Résiliation</h2>
                         <p>
                              En cas de manquement grave de l&#39;une des parties à ses obligations, non réparé dans un
                              délai de trente (30) jours suivant une mise en demeure adressée par écrit, l&#39;autre
                              partie peut résilier le contrat de plein droit.
                         </p>
                         <p className="mt-3">
                              En cas de résiliation, les prestations effectivement réalisées à la date d&#39;effet
                              restent dues au Prestataire, qui remet au Client les travaux en l&#39;état après règlement
                              des sommes correspondantes.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">17. Modification des CGV</h2>
                         <p>
                              Le Prestataire se réserve le droit de modifier les présentes CGV à tout moment. Les CGV
                              applicables sont celles en vigueur à la date de signature du devis, dont un exemplaire est
                              remis ou rendu accessible au Client à cette date.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">18. Droit applicable et règlement des litiges</h2>
                         <p>
                              Les présentes CGV sont soumises au droit français. Les parties s&#39;efforceront de
                              résoudre à l&#39;amiable tout différend né de leur exécution ou de leur interprétation.
                         </p>
                         <p className="mt-3">
                              <strong>Client consommateur.</strong> Conformément aux articles L611-1 et suivants du Code
                              de la consommation, le Client peut recourir gratuitement à un médiateur de la consommation
                              en vue de la résolution amiable du litige. Il peut également utiliser la plateforme de
                              règlement en ligne des litiges mise à disposition par la Commission européenne. À défaut
                              de résolution amiable, les juridictions compétentes sont déterminées par les règles
                              légales applicables.
                         </p>
                         <p className="mt-3">
                              <strong>Client professionnel.</strong> À défaut d&#39;accord amiable, tout litige relève
                              de la compétence exclusive des tribunaux du ressort du siège du Prestataire.
                         </p>
                    </section>
                    <Footer />
               </main>
          </div>
     )
}
