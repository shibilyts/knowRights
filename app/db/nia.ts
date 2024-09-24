const nia = [
  {
    chapter: 1,
    section: 1,
    section_title: 'Short title, extent and Commencement',
    section_desc:
      'This Act may be called the Negotiable Instruments Act, 1881.\n\nLocal extent. Saving of usages relating to hundis, etc.\n\nIt extends to the whole of India but nothing herein contained affects the ‘Indian Paper Currency Act, 1871, (3 of 1871) section 21, or affects any local usage relating to any instrument in an oriental language;\nProvided that such usages may be excluded by any words in the body of the instrument which indicate an intention that the legal relations of the parties thereto shall be governed by this Act and it shall come into force on the first day of March, 1882.',
  },
  {
    chapter: 1,
    section: 2,
    section_title: 'Commencement',
    section_desc: '[Repeal of enactments.]',
  },
  {
    chapter: 1,
    section: 3,
    section_title: 'Interpretation-clause',
    section_desc:
      'In this Act – “banker” includes any person acting as a banker and any post office savings bank;',
  },
  {
    chapter: 2,
    section: 4,
    section_title: 'Promissory note',
    section_desc:
      'A “promissory note” is an instrument in writing (not being a bank-note or a currency-note) containing an unconditional undertaking, signed by the maker, to pay a certain sum of money only to, or to the order of, a certain person, or to the bearer of the instrument.',
  },
  {
    chapter: 2,
    section: 5,
    section_title: 'Bill of exchange',
    section_desc:
      'A “bill of exchange” is an instrument in writing, containing an unconditional order, signed by the maker, directing a certain person to pay a certain sum of money only to, or to the order of, a certain person or to the bearer of the instrument.\nA promise or order to pay is not “conditional”, within the meaning of this section and section 4, by reason of the time for payment of the amount or any instalment thereof being expressed to be on, the lapse of a certain period after the occurrence of a specified event which, according to the ordinary expectation of mankind, is certain to happen, although the time of its happening may be uncertain.\nThe sum payable may be “certain”, within the meaning of this section and section 4, although it includes future interest or is payable at an indicated rate of exchange, or is according to the course of exchange, and although the instrument provides that, on default of payment of an instalment, the balance unpaid shall become due.\nThe person to whom it is clear that the direction is given or that payment is to be made may be a “certain I person”, within the meaning of this section and section 4, although he is mis-named or designated by description only.',
  },
  {
    chapter: 2,
    section: 6,
    section_title: 'Cheque',
    section_desc:
      'A “cheque” is a bill of exchange drawn on a specified banker and not expressed to be payable otherwise than on demand and it includes the electronic image of a truncated cheque and a cheque in the electronic form.\n\nExplanations\n\n\t\n\t\tFor the purposes of this section, the expressions—\n\t\t\n\t\t\t“a cheque in the electronic form” means a cheque drawn in electronic form by using any computer resource and signed in a secure system with digital signature (with or without biometrics signature) and asymmetric crypto system or with electronic signature, as the case may be;\n\t\t\t“a truncated cheque” means a cheque which is truncated during the course of a clearing cycle, either by the clearing house or by the bank whether paying or receiving payment, immediately on generation of an electronic image for transmission, substituting the further physical movement of the cheque in writing.\n\t\t\n\t\tFor the purposes of this section, the expression “clearing house” means the clearing house managed by the Reserve Bank of India or a clearing house recognised as such by the Reserve Bank of India.\n\t\tFor the purposes of this section, the expressions “asymmetric crypto system”, “computer resource”, “digital signature”, “electronic form” and “electronic signature” shall have the same meanings respectively assigned to them in the Information Technology Act, 2000.',
  },
  {
    chapter: 2,
    section: 7,
    section_title: 'Drawer, Drawee',
    section_desc:
      'The maker of a bill of exchange or cheque is called the “drawer”; the person thereby directed to pay is called the “drawee”.\nDrawee in case of need. When in the bill or in any endorsement thereon the name of any person is given in addition to the drawee to be resorted to in case of need, such person is called a “drawee in case of need “.\nAcceptor. After the drawee of a bill has signed his assent upon the bill, or, if there are more parts thereof than one, upon one of such parts, and delivered the same, or given notice of such signing to the holder or to some person on his behalf, he is called the “acceptor”.\nAcceptor for honour. When a bill of exchange has been noted or protested for non-acceptance or for better security, and any person accepts it supra-protest for honour of the drawer or of any one of the endorsers, such person is called an “acceptor for honour”.\nPayee. The person named in the instrument, to whom or to whose order the money is by the instrument directed to be paid, is called the “payee”.',
  },
  {
    chapter: 2,
    section: 8,
    section_title: 'Holder',
    section_desc:
      'The “holder” of a promissory note, bill of exchange or cheque means any person entitled in his own name to the possession thereof and to receive or recover the amount due thereon from the parties thereto.\nWhere the note, bill or cheque is lost or destroyed, its holder is the person so entitled at the time of such loss or destruction.',
  },
  {
    chapter: 2,
    section: 9,
    section_title: 'Holder in due course',
    section_desc:
      'Holder in due course, means any person who for consideration became the possessor of a promissory note, bill of exchange or cheque if payable to bearer, or the payee or indorsee thereof, if payable to order, before the amount mentioned in it became payable, and without having sufficient cause to believe that any defect existed in the title of the person from whom he derived his title.',
  },
  {
    chapter: 2,
    section: 10,
    section_title: 'Payment in due course',
    section_desc:
      'Payment in due course, means payment in accordance with the apparent tenor of the instrument in good faith and without negligence to any person in possession thereof under circumstances which do not afford a reasonable ground for believing that he is not entitled to receive payment of the amount therein mentioned.',
  },
  {
    chapter: 2,
    section: 11,
    section_title: 'Inland instrument',
    section_desc:
      'A promissory note, bill of exchange or cheque drawn or made in India, and made payable in, or drawn upon any person resident in, India shall be deemed to be an inland instrument.',
  },
  {
    chapter: 2,
    section: 12,
    section_title: 'Foreign instrument',
    section_desc:
      'Any such instrument not so drawn, made or made payable shall be deemed to be a foreign instrument.',
  },
  {
    chapter: 2,
    section: 13,
    section_title: 'Negotiable instrument',
    section_desc:
      'A “negotiable instrument” means a promissory note, bill of exchange or cheque payable either to order or to bearer.\n\t\tA negotiable instrument may be made payable to two or more payees jointly, or it may be made payable in the alternative to one of two, or one or some of several payees.',
  },
  {
    chapter: 2,
    section: 14,
    section_title: 'Negotiation',
    section_desc:
      'When a promissory note, bill of exchange or cheque is transferred to any person, so as to constitute that person the holder thereof, the instrument is said to be negotiated.',
  },
  {
    chapter: 2,
    section: 15,
    section_title: 'Indorsement',
    section_desc:
      'When the maker or holder of a negotiable instrument signs the same, otherwise than as such maker, for the purpose of negotiation, on the back or face thereof or on a slip of paper annexed thereto, or so signs for the same purpose a stamped paper intended to be completed as a negotiable instrument, he is said to indorse the same, and is called the “indorser”.',
  },
  {
    chapter: 2,
    section: 16,
    section_title: 'Indorsement in "blank" and "in full',
    section_desc:
      'If the indorser signs his name only, the indorsement is said to be “in blank”, and if he adds a direction to pay the amount mentioned in the instrument to, or to the order of, a specified person, the indorsement is said to be “in full”; and the person so specified is called the “indorsee” of the instrument.\n\t\tIndorsee. The provisions of this Act relating to a payee shall apply with the necessary modifications to an indorsee.',
  },
  {
    chapter: 2,
    section: 17,
    section_title: 'Ambiguous instruments',
    section_desc:
      'Where an instrument may be construed either as a promissory note or bill of exchange, the holder may at his election treat it as either, and the instrument shall be thenceforward treated accordingly.',
  },
  {
    chapter: 2,
    section: 18,
    section_title: 'Where amount is stated differently in figures and words',
    section_desc:
      'If the amount undertaken or ordered to be paid is stated differently in figures and in words, the amount stated in words shall be the amount undertaken or ordered to be paid.',
  },
  {
    chapter: 2,
    section: 19,
    section_title: 'Instruments payable on demand',
    section_desc:
      'A promissory note or bill of exchange, in which no time for payment is specified, and a cheque, are payable on demand.',
  },
  {
    chapter: 2,
    section: 20,
    section_title: 'Inchoate stamped instruments',
    section_desc:
      'Where one person signs and delivers to another a paper stamped in accordance with the law relating to negotiable instruments then in force in India, and either wholly blank or having written thereon an incomplete negotiable instrument, he thereby gives prima facie authority to the holder thereof to make or complete, as the case may be, upon it a negotiable instrument, for any amount specified therein and not exceeding the amount covered by the stamp. The person so signing shall be liable upon such instrument, in the capacity in which he signed the same, to any holder in due course for such amount:\nProvided that no person other than a holder in due course shall recover from the person delivering the instrument any thing in excess of the amount intended by him to be paid thereunder.',
  },
  {
    chapter: 2,
    section: 21,
    section_title: 'At sight',
    section_desc:
      '“On presentment”. In a promissory note or bill of exchange the expressions “at sight” and “on presentment” mean on demand.\nThe expression “after sight” means, in a promissory note, after presentment for sight, and, in a bill of exchange, after acceptance, or noting for non-acceptance, or protest for non-acceptance.',
  },
  {
    chapter: 2,
    section: 22,
    section_title: 'Maturity',
    section_desc:
      'The maturity of a promissory note or bill of exchange is the date at which it falls due.\nDays of grace. Every promissory note or bill of exchange which is not expressed to be payable on demand, at sight or on presentment is at maturity on the third day after the day on which it is expressed to be payable.',
  },
  {
    chapter: 2,
    section: 23,
    section_title:
      'Calculating maturity of bill or note payable so many months after date or sight',
    section_desc:
      'In calculating the date at which a promissory note or bill of exchange, made payable a stated number of months after date or after sight, or after a certain event, is at maturity, the period stated shall be held to terminate on the day of the month which corresponds with the day on which the instrument is dated, or presented for acceptance or sight, or noted for non-acceptance, or protested for non-acceptance, or the event happens, or, where the instrument is a bill of exchange made payable a stated number of months after sight and has been accepted for honour, with the day on which it was so accepted. If the month in which the period would terminate has no corresponding day, the period shall be held to terminate on the last day of such month.',
  },
  {
    chapter: 2,
    section: 24,
    section_title:
      'Calculating maturity of bill or note payable so many days after date or sight',
    section_desc:
      'In calculating the date at which a promissory note or bill of exchange made payable a certain number of days after date or after sight or after a certain event is at maturity, the day of the date, or of presentment for acceptance or sight, or of protest for non-acceptance, or on which the event happens, shall be excluded.',
  },
  {
    chapter: 2,
    section: 25,
    section_title: 'When day of maturity is a holdiay',
    section_desc:
      'When the day on which a promissory note or bill of exchange is at maturity is a public holiday, the instrument shall be deemed to be due on the next preceding business day.',
  },
  {
    chapter: 3,
    section: 26,
    section_title: 'Capacity to make, etc., promissory notes, etc.',
    section_desc:
      'Every person capable of contracting, according to the law to which he is subject, may bind himself and be bound by the making, drawing, acceptance, indorsement, delivery and negotiation of a promissory note, bill of exchange or cheque.\nMinor. A minor may draw, indorse, deliver and negotiate such instrument so as to bind all parties except himself.\nNothing herein contained shall be deemed to empower a corporation to make, indorse or accept such instruments except in cases in which, under the law for the time being in force, they are so empowered.',
  },
  {
    chapter: 3,
    section: 27,
    section_title: 'Agency',
    section_desc:
      'Every person capable of binding himself or of being bound, as mentioned in section 26, may so bind himself or be bound by a duly authorized agent acting in his name.\nA general authority to transact business and to receive and discharge debts does not confer upon an agent the power of accepting or indorsing bills of exchange so as to bind his principal.\nAn authority to draw bills of exchange does not of itself import an authority to indorse.',
  },
  {
    chapter: 3,
    section: 28,
    section_title: 'Liability of agent signing',
    section_desc:
      'An agent who signs his name to a promissory note, bill of exchange or cheque without indicating thereon that he signs as agent, or that he does not intend thereby to incur personal responsibility, is liable personally on the instrument, except to those who induced him to sign upon the belief that the principal only would be held liable.',
  },
  {
    chapter: 3,
    section: 29,
    section_title: 'Liability of legal representative signing',
    section_desc:
      'A legal representative of a deceased person who signs his name to a promissory note., bill of exchange or cheque is liable personally thereon unless he expressly limits his liability to the extent of the assets received by him as such.',
  },
  {
    chapter: 3,
    section: 30,
    section_title: 'Liability of drawer',
    section_desc:
      'The drawer of a bill of exchange or cheque is bound, in case of dishonour by the drawee or acceptor thereof, to compensate tile holder, provided due notice of dishonour has been given to, or received by, the drawer as hereinafter provided.',
  },
  {
    chapter: 3,
    section: 31,
    section_title: 'Liability of drawee of cheque',
    section_desc:
      'The drawee of a cheque having sufficient funds of the drawer in his hands properly applicable to the payment of such cheque must pay the cheque when duly required so to do, and, in default of such payment, must compensate the drawer for any loss or damage caused by such default.',
  },
  {
    chapter: 3,
    section: 32,
    section_title: 'Liability of maker of note and acceptor of bill',
    section_desc:
      'In the absence of a contract to the contrary, the maker of a promissory note and the acceptor before maturity of a bill of exchange are bound to pay the amount thereof at maturity according to the apparent tenor of the note or acceptance respectively, and the acceptor of a bill of exchange at or after maturity is bound to pay the amount thereof to the holder on demand.\nIn default of such payment as aforesaid, such maker or acceptor is bound to compensate any party to the note or bill for any loss or damage sustained by him and caused by such default.',
  },
  {
    chapter: 3,
    section: 33,
    section_title: 'Only drawee can be acceptor except in need or for honour',
    section_desc:
      'No person except the drawee of a bill of exchange, or all or some of several drawees, or a person named therein as a drawee in case of need, or an acceptor for honour, can bind himself by an acceptance.',
  },
  {
    chapter: 3,
    section: 34,
    section_title: 'Acceptance by several drawees not partners',
    section_desc:
      'Where there are several drawees of a bill of exchange who are not partners, each of them can accept it for himself, but none of them can accept it for another without his authority.',
  },
  {
    chapter: 3,
    section: 35,
    section_title: 'Liability of indorser',
    section_desc:
      'In the absence of a contract to the contrary, whoever indorses and delivers a negotiable instrument before maturity without, in such indorsement, expressly excluding or making conditional his own liability, is bound thereby to every subsequent holder, in case of dishonour by the drawee, acceptor or maker, to compensate such holder for any loss or damage caused to him by such dishonour, provided due notice of dishonour has been given to, or received by, such indorser as hereinafter provided.\nEvery indorser after dishonour is liable as upon an instrument payable on demand.',
  },
  {
    chapter: 3,
    section: 36,
    section_title: 'Liability of prior parties to holder in due course',
    section_desc:
      'Every prior party to a negotiable instrument is liable thereon to a holder in due course until the instrument is duly satisfied.',
  },
  {
    chapter: 3,
    section: 37,
    section_title: 'Maker, drawer and acceptor principals',
    section_desc:
      'The maker of a promissory note or cheque, the drawer of a bill of exchange until acceptance, and the acceptor are, in the absence of a contract to the contrary, respectively liable thereon as principal debtors, and the other parties thereto are liable thereon as sureties for the maker, drawer or acceptor, as the case may be.',
  },
  {
    chapter: 3,
    section: 38,
    section_title:
      'Prior party a principal in respect of each subsequent party',
    section_desc:
      'As between the parties so liable as sureties, each prior party is, in the absence of a contract to the contrary, also liable thereon as a principal debtor in respect of each subsequent party.',
  },
  {
    chapter: 3,
    section: 39,
    section_title: 'Suretyship',
    section_desc:
      'When the holder of an accepted bill of exchange enters into any contract with the acceptor which, under section 134 or 135 of the Indian Contract Act, 1872 (9 of 1872), would discharge the other parties.\nThe holder may expressly reserve his right to charge the other parties, and in such case they are not discharged.',
  },
  {
    chapter: 3,
    section: 40,
    section_title: "Discharge of indorser's liability",
    section_desc:
      'Where the holder of a negotiable instrument, without the consent of the indorser, destroys or impairs the indorser’s remedy against a prior party, the indorser is discharged from liability to the holder to the same extent as if the instrument had been paid at maturity.',
  },
  {
    chapter: 3,
    section: 41,
    section_title: 'Acceptor bound, although, indorsement forged',
    section_desc:
      'An acceptor of a bill of exchange already indorsed is not relieved from liability by reason that such indorsement is forged, if he knew or had reason to believe the indorsement to be forged when he accepted the bill.',
  },
  {
    chapter: 3,
    section: 42,
    section_title: 'Acceptance of bill drawn in fictitious name',
    section_desc:
      'An acceptor of a bill of exchange drawn in a fictitious name and payable to the drawer’s order is not, by reason that such name is fictitious, relieved from liability to any holder in due course claiming under an indorsement by the same hand as the drawer’s signature, and purporting to be made by the drawer.',
  },
  {
    chapter: 3,
    section: 43,
    section_title: 'Negotiable instrument made, etc., without consideration',
    section_desc:
      'A negotiable instrument made, drawn, accepted, indorsed or transferred without consideration, or for a consideration which fails, creates no obligation of payment between the parties to the transaction. But if any such party has transferred the instrument with or without indorsement to a holder for consideration, such holder, and every subsequent holder deriving title from him, may recover the amount due on such instrument from the transferor for consideration or any prior party thereto.',
  },
  {
    chapter: 3,
    section: 44,
    section_title: 'Partial absence or failure of money consideration',
    section_desc:
      'When the consideration for which a person signed a promissory note, bill of exchange or cheque consisted of money, and was originally absent in part or has subsequently failed in part, the sum which a holder standing in immediate relation with such signer is entitled to receive from him is proportionally reduced.',
  },
  {
    chapter: 3,
    section: 45,
    section_title: 'Partial failure of consideration not consisting of money',
    section_desc:
      'Where a part of the consideration for which a person signed a promissory note, bill of exchange or cheque, though not consisting of money, is ascertainable in money without collateral enquiry, and there has been a failure of that part, the sum which a holder standing in immediate relation with such signer is entitled to receive from him is proportionally reduced.',
  },
  {
    chapter: 3,
    section: '45A',
    section_title: "Holder's right to duplicate of lost bill",
    section_desc:
      'Where a bill of exchange has been lost before it is over-due, the person who was the holder of it may apply to the drawer to give him another bill of the same tenor, giving security to the drawer, if required, to indemnify him against all persons whatever in case the bill alleged to have been lost shall be found again.\nIf the drawer on request as aforesaid refuses to give such duplicate bill, he may be compelled to do so.',
  },
  {
    chapter: 4,
    section: 46,
    section_title: 'Delivery',
    section_desc:
      'The making, acceptance or indorsement of a promissory note, bill of exchange or cheque is completed by delivery, actual or constructive.\nAs between parties standing in immediate relation, delivery to be effectual must be made by the party making, accepting or indorsing the instrument, or by a person authorized by him in that behalf.\nAs between such parties and any holder of the instrument other than a holder in due course, it may be shown that the instrument was delivered conditionally or for a special purpose only, and not for the purpose of transferring absolutely the property therein.\nA promissory note, bill of exchange or cheque payable to bearer is negotiable by the delivery thereof.\nA promissory note, bill of exchange or cheque payable to order is negotiable by the holder by indorsement and delivery thereof.',
  },
  {
    chapter: 4,
    section: 47,
    section_title: 'Negotiations by delivery',
    section_desc:
      'Subject to the provisions of section 58, a promissory note, bill of exchange or cheque payable to\nbearer is negotiable by delivery thereof.',
  },
  {
    chapter: 4,
    section: 48,
    section_title: 'Negotiation by indorsement',
    section_desc:
      'Subject to the provisions of section 58, a promissory note, bill of exchange or cheque payable to\norder, is negotiable by the holder by indorsement and delivery thereof.',
  },
  {
    chapter: 4,
    section: 49,
    section_title:
      'Conversion of indorsement in blank into indorsement in full',
    section_desc:
      'The holder of a negotiable instrument indorsed in blank may, without signing his own name, by writing above the indorser’s signature a direction to pay to any other person as indorsee, convert the indorsement in blank into an indorsement in full; and the holder does not thereby incur the responsibility of an indorser.',
  },
  {
    chapter: 4,
    section: 50,
    section_title: 'Effect of indorsement',
    section_desc:
      'The indorsement of a negotiable instrument followed by delivery transfers to the indorsee the property therein with the right of further negotiation; but the indorsement may, by express words, restrict or exclude such right, or may merely constitute the indorsee an agent to indorse the instrument, or to reeive its contents for the indorser, or for some other specified person.',
  },
  {
    chapter: 4,
    section: 51,
    section_title: 'Who may negotiate',
    section_desc:
      'Every sole maker, drawer, payees or indorsee, or all of several joint makers, drawers, payees or indorsees, of a negotiable instrument may, if the negotiability of such instrument has not been restricted or excluded as mentioned in section 50, indorse and negotiate the same.',
  },
  {
    chapter: 4,
    section: 52,
    section_title:
      'Indorser who excluds his own liability or makes it conditional',
    section_desc:
      'The indorser of a negotiable instrument may, by express words in the indorsement, exclude his own liability thereon, or make such liability or the right of the indorsee to receive the amount due thereon depend upon the happening of a specified event, although such event may never happen.\nWhere an indorser so excludes his liability and afterwards becomes the holder of the instrument, all intermediate indorsers are liable to him.',
  },
  {
    chapter: 4,
    section: 53,
    section_title: 'Holder deriving title from holder in due course',
    section_desc:
      'A holder of a negotiable instrument who derives title from a holder in due course has the rights thereon of that holder in due course.',
  },
  {
    chapter: 4,
    section: 54,
    section_title: 'Instrument indorsed in blank',
    section_desc:
      'Subject to the provisions hereinafter contained as to crossed cheques, a negotiable instrument indorsed in blank is payable to the bearer thereof even although originally payable to order.',
  },
  {
    chapter: 4,
    section: 55,
    section_title:
      'Conversion of indorsement in blank into indorsement in full',
    section_desc:
      'If a negotiable instrument, after having been indorsed in blank, is indorsed in full, the amount of it cannot be claimed from the indorser in full, except by the person to whom it has been indorsed in full, or by one who derives title through such person.',
  },
  {
    chapter: 4,
    section: 56,
    section_title: 'Indorsement for part of sum due',
    section_desc:
      'No writing on a negotiable instrument is valid for the purpose of negotiation if such writing purports to transfer only a part of the amount appearing to be due on the instrument; but where such amount has been partly paid, a note to that effect may be indorsed on the instrument, which may then be negotiated for the balance.',
  },
  {
    chapter: 4,
    section: 57,
    section_title:
      'Legal representative cannot by delivery only negotiate instrument indorsed by deceased',
    section_desc:
      'The legal representative of a deceased person cannot negotiate by delivery only a promissory note, bill of exchange or cheque payable to order and indorsed by the deceased but not delivered.',
  },
  {
    chapter: 4,
    section: 58,
    section_title:
      'Instrument obtained by unlawful means or for unlawful consideration',
    section_desc:
      'When a negotiable instrument has been lost, or has been obtained from any maker, acceptor or holder thereof by means of an offence or fraud, or for an unlawful consideration, no possessor or indorsee who claims through the person who found or so obtained the instrument is entitled to receive the amount due thereon from such maker, acceptor or holder, or from any party prior to such holder, unless such possessor or indorsee is, or some person through whom he claims was, a holder thereof in due course.',
  },
  {
    chapter: 4,
    section: 59,
    section_title: 'Instrument acquired after dishonour or when overdue',
    section_desc:
      'The holder of a negotiable instrument, who has acquired it after dishonour, whether by non-acceptance or non-payment, with notice thereof, or after maturity, has only, as against the other parties, the rights thereon of his transferor:\nAccommodation note or bill. Provided that any person who, in good faith and for consideration, becomes the holder, after maturity, of a promissory note or bill of exchange made, drawn or accepted without consideration, for the purpose of enabling some party thereto to raise money thereon, may recover the amount of the note or bill from any prior party.',
  },
  {
    chapter: 4,
    section: 60,
    section_title: 'Instrument negotiable till payment or satisfaction',
    section_desc:
      'A negotiable instrument may be negotiated (except by the maker, drawee or acceptor after maturity) until payment or satisfaction thereof by the maker, drawee or acceptor at or after maturity, but not after such payment or satisfaction.',
  },
  {
    chapter: 5,
    section: 61,
    section_title: 'Presentment for acceptance',
    section_desc:
      'A bill of exchange payable after sight must, if no time or place is specified therein for presentment, be presented to the drawee thereof for acceptance, if he can, after reasonable search, be found, by a person entitled to demand acceptance, within a reasonable time after it is drawn, and in business hours on a business day. In default of such presentment, no party thereto is liable thereon to the person making such default.\nIf the drawee cannot, after reasonable search, be found, the bill is dishonoured.\nIf the bill is directed to the drawee at a particular place, it must be presented at that place; and if at the due date for presentment he cannot, after reasonable search, be found there, the bill is dishonoured.\nWhere authorized by agreement or usage, a presentment through the post office by means of a registered letter is sufficient.',
  },
  {
    chapter: 5,
    section: 62,
    section_title: 'Presentment of promissory note for sight',
    section_desc:
      'A promissory note, payable at a certain period after sight, must be presented to the maker thereof for sight (if he can after reasonable search be found) by a person entitled to demand payment, within a reasonable time after it is made and in business hours on a business day. In default of such presentment, no party thereto is liable thereon to the person making such default.',
  },
  {
    chapter: 5,
    section: 63,
    section_title: "Drawee's time for deliberation",
    section_desc:
      'The holder must, if so required by the drawee of a bill of exchange presented to him for acceptance, allow the drawee forty-eight hours (exclusive of public holidays) to consider whether he will accept it.',
  },
  {
    chapter: 5,
    section: 64,
    section_title: 'Presentment for payment',
    section_desc:
      'Promissory notes, bills of exchange and cheques must be presented for payment to the maker, acceptor or drawee thereof respectively, by or on behalf of the holder as hereinafter provided. In default of such presentment, the other parties thereto are not liable thereon to such holder.\nWhere authorized by agreement or usage, a presentment through the post office by means of a registered letter is sufficient.\n\t\tNotwithstanding anything contained in section 6, where an electronic image of a truncated cheque is presented for payment, the drawee bank is entitled to demand any further information regarding the truncated cheque from the bank holding the truncated cheque in case of any reasonable suspicion about the genuineness of the apparent tenor of instrument, and if the suspicion is that of any fraud, forgery, tampering or destruction of the instrument, it is entitled to further demand the presentment of the truncated cheque itself for verification:\n\nProvided that the truncated cheque so demanded by the drawee bank shall be retained by it, if the payment is made accordingly.',
  },
  {
    chapter: 5,
    section: 65,
    section_title: 'Hours for presentment',
    section_desc:
      'Presentment for payment must be made during the usual hours of business, and, if at a banker’s, within\nbanking hours.',
  },
  {
    chapter: 5,
    section: 66,
    section_title:
      'Presentment for payment of instrument payable after date or sight',
    section_desc:
      'A promissory note or bill of exchange, made payable at a specified period after date or sight thereof, must be presented for payment at maturity.',
  },
  {
    chapter: 5,
    section: 67,
    section_title:
      'Presentment for payment of promissory note payable by instalments',
    section_desc:
      'A promissory note payable by instalments must be presented for payment on the third day after the date fixed for payment of each instalment; and non-payment on such presentment has the same effect as non-payment of a note at maturity.',
  },
  {
    chapter: 5,
    section: 68,
    section_title:
      'Presentment for payment of instrument payable at specified place and not else where',
    section_desc:
      'A promissory note, bill of exchange or cheque made, drawn or accepted payable at a specified place and not elsewhere must, in order to charge any party thereto, be presented for payment at that place.',
  },
  {
    chapter: 5,
    section: 69,
    section_title: 'Instrument payable at specified place',
    section_desc:
      'A promissory note or bill of exchange made, drawn or accepted payable at a specified place must, in order to charge the maker or drawer thereof, be presented for payment at that place.',
  },
  {
    chapter: 5,
    section: 70,
    section_title: 'Presentment where no exclusive place specified',
    section_desc:
      'A promissory note or bill of exchange, not made payable as mentioned in sections 68 and 69, must be presented for payment at the place of business (if any), or at the usual residence, of the maker, drawee or acceptor thereof, as the case may be.',
  },
  {
    chapter: 5,
    section: 71,
    section_title:
      'Presentment when maker, etc., has no known place of business or residence.',
    section_desc:
      'If the maker, drawee or acceptor of a negotiable instrument has no known place of business or fixed residence, and no place is specified in the instrument for presentment for acceptance or payment, such presentment may be made to him in person wherever be can be found.',
  },
  {
    chapter: 5,
    section: 72,
    section_title: 'Presentment of cheque to charge drawer',
    section_desc:
      'Subject to the provisions of section 84, a cheque must, in order to charge the drawer, be presented at the bank upon which it is drawn before the relation between the drawer and his banker has been altered to the prejudice of the drawer.',
  },
  {
    chapter: 5,
    section: 73,
    section_title: 'Presentment of cheque to charge any other person',
    section_desc:
      'A cheque must, in order to charge any person except the drawer, be presented within a reasonable time after delivery thereof by such person.',
  },
  {
    chapter: 5,
    section: 74,
    section_title: 'Presentment of instrument payable on demand',
    section_desc:
      'Subject to the provisions of section 31, a negotiable instrument payable on demand must be presented for payment within a reasonable time after it is received by the holder.',
  },
  {
    chapter: 5,
    section: 75,
    section_title:
      'Presentment by or to agent, representative of deceased, or assignee of insolvent',
    section_desc:
      'Presentment for acceptance or payment may be made to the duly authorized agent of the drawee, maker or acceptor, as the case may be, or, where the drawee, maker or acceptor has died, to his legal representative, or, where he has been declared an insolvent, to his assignee.',
  },
  {
    chapter: 5,
    section: '75A',
    section_title: 'Excuse for delay in presentment for acceptance or payment',
    section_desc:
      'Delay in presentment for acceptance or payment is excused if the delay is caused by circumstances beyond the control of the holder, and not imputable to his default, misconduct or negligence. When the cause of delay ceases to operate, presentment must be made within a reasonable time.',
  },
  {
    chapter: 5,
    section: 76,
    section_title: 'When presentment unnecessary',
    section_desc:
      'No presentment for payment is necessary, and the instrument is dishonoured at the due date for presentment, in any of the following cases:\n\t\n\t\tif the maker, drawee or acceptor intentionally prevents the presentment of the instrument, or, if the instrument being payable at his place of business, he closes such place on a business day during the usual business hours, or, if the instrument being payable at some other specified place, neither he nor any person authorized to pay it attends at such place during the usual business hours, or, if the instrument not being payable at any specified place, he cannot after due search be found;\n\t\tas against any party sought to be charged therewith, if he has engaged to pay notwithstanding non-presentment;\n\t\tas against any party if, after maturity, with knowledge that the instrument has not been presented, he makes a part payment on account of the amount due on the instrument, or promises to pay the amount due thereon in whole or in part, or otherwise waives his right to take advantage of any default in presentment for payment;\n\t\tas against the drawer, if the drawer could not suffer damage from the want of such presentment.',
  },
  {
    chapter: 5,
    section: 77,
    section_title:
      'Liability of banker for negligently dealing with bill presented for payment',
    section_desc:
      'When a bill of exchange, accepted payable at a specified bank, has been duly presented there for payment and dishonoured, if the banker so negligently or improperly keeps, deals with or delivers back such bill as to cause loss to the holder, he must compensate the holder for such loss.',
  },
  {
    chapter: 6,
    section: 78,
    section_title: 'To whom payment should be made',
    section_desc:
      'Subject to the provisions of section 82, clause ( c ), payment of the amount due on a promissory note, bill of exchange or cheque must, in order to discharge the maker or acceptor, be made to the holder of the instrument.',
  },
  {
    chapter: 6,
    section: 79,
    section_title: 'Interest when rate specified',
    section_desc:
      'When interest at a specified rate is expressly made payable on a promissory note or bill of exchange, interest shall be calculated at the rate specified, on the amount of the principal money due thereon, from the date of the instrument, until tender or realization of such amount, or until such date after the institution of a suit to recover such amount as the Court directs.',
  },
  {
    chapter: 6,
    section: 80,
    section_title: 'Interest when no rate specified',
    section_desc:
      'When no rate of interest is specified in the instrument, interest on the amount due thereon shall, notwithstanding any agreement relating to interest between any parties to the instrument, be calculated at the rate of eighteen per annum, from the date at which the same ought to have been paid by the party Charge, until tender or realization of the amount due thereon, or until such date after the institution of a suit to recover such amount as the Court directs.',
  },
  {
    chapter: 6,
    section: 81,
    section_title:
      'Delivery of instrument on payment, or indemnity in case of loss',
    section_desc:
      'Any person liable to pay, and called upon by the holder thereof to pay, the amount due on a promissory note, bill of exchange or cheque is before payment entitled to have it shown, and is on payment entitled to have it delivered up, to him, or, if the instrument is lost or cannot be produced, to be indemnified against any further claim thereon against him.\n\t\tWhere the cheque is an electronic image of a truncated cheque, even after the payment the banker who received the payment shall be entitled to retain the truncated cheque.\n\t\tA certificate issued on the foot of the printout of the electronic image of a truncated cheque by the banker who paid the instrument, shall be prima facie proof of such payment.',
  },
  {
    chapter: 6,
    section: '81A',
    section_title:
      'Application of the Act to electronic cheque and truncated cheque',
    section_desc:
      'The provisions of this Act, for the time being in force, shall apply to,  or in relation to, electronic cheques and the truncated cheques subject to such modifications and amendments as may be necessary for carrying out the purposes of the Negotiable Instruments Act, 1881 (26 of 1881) by the Central Government, in consultation with the Reserve Bank of India, by notification in the Official Gazette.\n\t\tEvery notification made by the Central Government under sub-section (1) shall be laid, as soon as may be after it is made, before each House of Parliament, while it is in session, for a total period of thirty days which may be comprised in one session or in two or more successive sessions, and if, before the expiry of me session immediately following the session or the successive sessions aforesaid, both Houses agree in making any modification in the notification or both Houses agree that the notification should not be made, the notification shall thereafter have effect only in such modified form or be of no effect, as the case may be; so, however, that any such modification or annulment shall be without prejudice to the validity of anything previously done under that notification.',
  },
  {
    chapter: 7,
    section: 82,
    section_title: 'Discharge from liability',
    section_desc:
      'The maker, acceptor or indorser respectively of a negotiable instrument is discharged from liability thereon:\n\t\n\t\tby cancellation; to a holder thereof who cancels such acceptor’s or indorser’s name with intent to discharge him, and to all parties claiming under such holder;\n\t\tby release; to a holder thereof who otherwise discharges such maker, acceptor or indorser, and to all parties deriving title under such holder after notice of such discharge;\n\t\tby payment ,to all parties thereto, if the instrument is payable to bearer, or has been indorsed in blank, and such maker, acceptor or indorser makes payment in due course of the amount due thereon.',
  },
  {
    chapter: 7,
    section: 83,
    section_title:
      'Discharge by allowing drawee more than forty-eight hours to accept',
    section_desc:
      'If the holder of a bill of exchange allows the drawee more than forty-eight hours, exclusive of public holidays, to consider whether he will accept the same, all previous parties not consenting to such allowance are thereby discharged from liability to such holder.',
  },
  {
    chapter: 7,
    section: 84,
    section_title: 'When cheque not duly presented and drawer damaged thereby.',
    section_desc:
      'Where a cheque is not presented for payment within a reasonable time of its issue, and the drawer or person on whose account it is drawn had the right, at the time when presentment ought to have been made, as between himself and the banker, to have the cheque paid and suffers actual damage through the delay, he is discharged to the extent of such damage, that is to say, to the extent to which such drawer or person is a creditor of the banker to a larger amount than he would have been if such cheque had been paid.\nIn determining what is a reasonable time, regard shall be had to the nature of the instrument, the usage of trade and of bankers, and the facts of the particular case.\nThe holder of the cheque as to which such drawer or person is so discharged shall be a creditor, in lieu of such drawer or person, of such banker to the extent of such discharge and entitled to recover the amount from him.',
  },
  {
    chapter: 7,
    section: 85,
    section_title: 'Cheque payable to order.',
    section_desc:
      'Where a cheque payable to order purports to be endorsed by or on behalf of the payee, the drawee is discharged by payment in due course.\nWhere a cheque is originally expressed to be payable to bearer, the drawee is discharged by payment in due course to the bearer thereof, notwithstanding any endorsement whether in full or in blank appearing thereon, and notwithstanding that any such endorsement purports to restrict or exclude further negotiation.',
  },
  {
    chapter: 7,
    section: '85A',
    section_title:
      'Drafts drawn by one branch of a bank on another payable to order',
    section_desc:
      'Where any draft, that is, an order to pay money, drawn by one office of a bank upon another office of the same bank for a sum of money payable to order on demand, purports to be endorsed by or on behalf of the payee, the bank is discharged by payment in due course.',
  },
  {
    chapter: 7,
    section: 86,
    section_title:
      'Parties not consenting discharged by qualified or limited acceptance',
    section_desc:
      'If the holder of a bill of exchange acquiesces in a qualified acceptance, or one limited to part of the sum mentioned in the bill, or which substitutes a different place or time for payment, or which, where the drawees are not partners, is not signed by all the drawees, all previous parties whose consent is not obtained to such acceptance are discharged as against the holder and those claiming under him, unless on notice given by the holder they assent to such acceptance.',
  },
  {
    chapter: 7,
    section: 87,
    section_title: 'Effect of material alteration',
    section_desc:
      'Alteration by indorsee. Any material alteration of a negotiable instrument renders the same void as against any one who is a party thereto at the time of making such alteration and does not consent thereto, unless it was made in order to carry out the common intention of the original parties.\nAlteration by indorsee. And any such alteration, if made by an indorsee, discharges his indorser from all liability to him in respect of the consideration thereof.\nThe provisions of this section are subject to those of sections 20, 49, 86 and 125.',
  },
  {
    chapter: 7,
    section: 88,
    section_title:
      'Acceptor or indorser bound notwithstanding previous alteration',
    section_desc:
      'An acceptor or indorser of a negotiable instrument is bound by his acceptance or indorsement notwithstanding any previous alteration of the instrument.',
  },
  {
    chapter: 7,
    section: 89,
    section_title: 'Payment of instrument on which alteration is not apparent',
    section_desc:
      'Where a promissory note, bill of exchange or cheque has been materially altered but does not appear to have been so altered, or where a cheque is presented for payment which does not at the time of presentation appear to be crossed or to have had a crossing which has been obliterated, payment thereof by a person or banker liable to pay, and paying the same according to the apparent tenor thereof at the time of payment and otherwise in due course, shall discharge such person or banker from all liability thereon; and such payment shall not be questioned by reason of the instrument having been altered or the cheque crossed.\n\t\tWhere the cheque is an electronic image of a truncated cheque, any difference in apparent tenor of such electronic image and the truncated cheque shall be a material alteration and it shall be the duty of the bank or the clearing house, as the case may be, to ensure the exactness of the apparent tenor of electronic image of the truncated cheque while truncating and transmitting the image.\n\t\tAny bank or a clearing house which receives a transmitted electronic image of a truncated cheque, shall verify from the party who transmitted the image to it, that the image so transmitted to it and received by it, is exactly the same.',
  },
  {
    chapter: 7,
    section: 90,
    section_title:
      "Extinguishment of rights of action on bill in acceptor's hands",
    section_desc:
      'If a bill of exchange which has been negotiated is, at or after maturity, held by the acceptor in his own right, all rights of action thereon are extinguished.',
  },
  {
    chapter: 8,
    section: 91,
    section_title: 'Dishonour by non-acceptance',
    section_desc:
      'A bill of exchange is said to be dishonoured by non-acceptance when the drawee, or one of several drawees not being partners, makes default in acceptance upon being duly required to accept the bill, or where presentment is excused and the bill is not accepted.\nWhere the drawee is incompetent to contract, or the acceptance is qualified, the bill may be treated as dishnoured.',
  },
  {
    chapter: 8,
    section: 92,
    section_title: 'Dishonour by non-payment',
    section_desc:
      'A promissory note, bill of exchange or cheque is said to be dishonoured by non-payment when the maker of the note, acceptor of the bill or drawee of the cheque makes default in payment upon being duly required to pay the same.',
  },
  {
    chapter: 8,
    section: 93,
    section_title: 'By and to whom notice should be given',
    section_desc:
      'When a promissory note, bill of exchange or cheque is dishonoured by non-acceptance or non-payment, the holder thereof, or some party thereto who remains liable thereon, must give notice that the instrument has been so dishonoured to all other parties whom the holder seeks to make severally liable thereon, and to some one of several parties whom he seeks to make jointly liable thereon.\nNothing in this section renders it necessary to give notice to the maker of the dishonoured promissory note or the drawee or acceptor of the dishonoured bill of exchange or cheque.',
  },
  {
    chapter: 8,
    section: 94,
    section_title: 'Mode in which notice may be given',
    section_desc:
      'Notice of dishonour may be given to a duly authorized agent of the person to whom it is required to be given, or, where he has died, to his legal representative, or, where he has been declared an insolvent, to his assignee; may be oral or written; may, if written, be sent by post; and may be in any form; but it must inform the party to whom it is given, either in express terms or by reasonable intendment, that the instrument has been dishonoured, and in what way, and that he Will be held liable thereon; and it must be given within a reasonable time after dishonour, at the place of business or (in case such party has no place of business) at the residence of the party for whom it is intended.\nIf the notice is duly directed and sent by post and miscarries, such miscarriage does not render the notice invalid.',
  },
  {
    chapter: 8,
    section: 95,
    section_title: 'Party receiving must transmit notice of dishonour',
    section_desc:
      'Any party receiving notice of dishonour must, in order to render any prior party liable to himself, give notice of dishonour to such party within a reasonable time, unless such party otherwise receives due notice as provided by section 93.',
  },
  {
    chapter: 8,
    section: 96,
    section_title: 'Agent for presentment',
    section_desc:
      'When the instrument is deposited with an agent for presentment, the agent is entitled to the same time to give notice to his principal as if he were the holder giving notice of dishonour, and the principal is entitled to a further like period to give notice of dishonour.',
  },
  {
    chapter: 8,
    section: 97,
    section_title: 'When party to whom notice given is dead',
    section_desc:
      'When the party to whom notice of dishonour is despatched is dead, but the party despatching the notice is ignorant of his death the notice is sufficient.',
  },
  {
    chapter: 8,
    section: 98,
    section_title: 'When notice of dishnour is unnecessary',
    section_desc:
      'No notice of dishonour is necessary:\n\t\n\t\twhen it is dispensed with by the party entitled thereto;\n\t\tin order to charge the drawer when he has countermanded payment;\n\t\twhen the party charged could not suffer damage for want of notice;\n\t\twhen the party entitled to notice cannot after due search be found; or the party bound to give notice is, for any other reason, unable without any fault of his own to give it;\n\t\tto charge the drawers, when the acceptor is also a drawer;\n\t\tin the case of a promissory note which is not negotiable;\n\t\twhen the party entitled to notice, knowing the facts,promises unconditionally to pay the amount due on the instrument.',
  },
  {
    chapter: 9,
    section: 99,
    section_title: 'Noting',
    section_desc:
      'When a promissory note or bill of exchange has been dishonoured by non-acceptance or non-payment, the holder may cause such dishonour to be noted by a notary public upon the instrument, or upon a paper attached thereto, or partly upon each. Such note must be made within a reasonable time after dishonour, and must specify the date of dishonour, the reason, if any, assigned for such dishonour, or, if the instrument has not been expressly dishonoured, the reason why the holder treats it as dishonoured, and the notary’s charges.',
  },
  {
    chapter: 9,
    section: 100,
    section_title: 'Protest',
    section_desc:
      'When a promissory note or bill of exchange has been dishonoured by non-acceptance or non-payment, the holder may, within a reasonable time, cause such dishonour to be noted and certified by a notary public. Such certificate is called a protest.\nProtest for better security. When the acceptor of a bill of exchange has become insolvent, or his credit has been publicly impeached, before the maturity of the bill, the holder may, within a reasonable time, cause a notary public to demand better security of the acceptor, and on its being refused may, within a reasonable time, cause such facts to be noted and certified as aforesaid. Such certificate is called a protest for better security.',
  },
  {
    chapter: 9,
    section: 101,
    section_title: 'Contents of protest',
    section_desc:
      'A protest under section 100 must contain:\n\t\n\t\teither the instrument itself, or a literal transcript of the instrument and of everything written or printed thereupon;\n\t\tthe name of the person for whom and against whom the instrument has been protested;\n\t\ta statement that payment or acceptance, or better security, as the case may be, has been demanded of such person by the notary public; the terms of his answer, if any, or a statement that he gave no answer or that he could not be found;\n\t\twhen the note or bill has been dishonoured, the place and time of dishonour, and, when better security has been refused, the place and time of refusal;\n\t\tthe subscription of the notary public making the protest;\n\t\tin the event of an acceptance for honour or of a payment for honour, the name of the person by whom, of the person for whom, and the manner in which, such acceptance or payment was offered and effected.\nA notary public may make the demand mentioned in clause ( c ) of this section either in person or by his clerk or, where authorized by agreement or usage, by registered letter.',
  },
  {
    chapter: 9,
    section: 102,
    section_title: 'Protest for non-payment after dishonour by non-acceptance',
    section_desc:
      'When a promissory note or bill of exchange is required by law to be protested, notice of such protest must be given instead of notice of dishonour, in the same manner and subject to the same conditions; but the notice may be given by the notary public who makes the protest.',
  },
  {
    chapter: 9,
    section: 103,
    section_title:
      'Protest of bills drawn payable at some other place, for non-payement after dishonour by non-acceptance',
    section_desc:
      'All bills of exchange drawn payable at some other place than the place mentioned as the residence of the drawee, and which are dishonoured by non-acceptance, may, without further presentment to the drawee, be protested for non-payment in the place specified for payment, unless paid before or at maturity.',
  },
  {
    chapter: 9,
    section: 104,
    section_title: 'Protest of foreign bills',
    section_desc:
      'Foreign bills of exchange must be protested for dishonour when such protest is required by the law of the place where they are drawn.',
  },
  {
    chapter: 9,
    section: '104A',
    section_title: 'When noting equivalent to protest',
    section_desc:
      'For the purposes of this Act, where a bill or note is required to be protested within a specified time or before some further proceeding is taken, it is sufficient that the bill has been noted for protest before the expiration of the specified time or the taking of the proceeding; and the formal protest may be extended at any time thereafter as of the date of the noting.',
  },
  {
    chapter: 10,
    section: 105,
    section_title: 'Reasonable time',
    section_desc:
      'In determining what is a reasonable time for presentment for acceptance or payment, for giving notice of dishonour and for noting, regard shall be had to the nature of the instrument and the usual course of dealing with respect to similar instruments; and, in calculating such time, public holidays shall be excluded.',
  },
  {
    chapter: 10,
    section: 106,
    section_title: 'Reasonable time of giving notice of dishonour',
    section_desc:
      'If the holder and the party to whom notice of dishonour is given carry on business or live (as the case may be) in different places, such notice is given within a reasonable time if it is despatched by the next post or on the day next after the day of dishonour.\nIf the said parties carry on business or live in the same place, such notice is given within a reasonable time if it is despatched in time to reach its destination on the day next after the day of dishonour.',
  },
  {
    chapter: 10,
    section: 107,
    section_title: 'Reasonable time for transmitting such notice',
    section_desc:
      'A party receiving notice of dishonour, who seeks to enforce his right against a prior party, transmits the notice within a reasonable time — if he transmits it within the same time after its receipt as he would have had to give notice if he had been the holder.',
  },
  {
    chapter: 11,
    section: 108,
    section_title: 'Acceptance for honour',
    section_desc:
      'When a bill of exchange has been noted or protested for nonacceptance or for better security, any person not being a party already liable thereon may, with the consent of the holder, by writing on the bill, accept the same for the honour of any party thereto.',
  },
  {
    chapter: 11,
    section: 109,
    section_title: 'How acceptance for honour must be made',
    section_desc:
      'A person desiring to accept for honour must, by writing on the bill under his hand, declare that he accepts under protest the protested bill for the honour of the drawer or of a particular indorser whom he names, or generally for honour.',
  },
  {
    chapter: 11,
    section: 110,
    section_title: 'Acceptance not specifying for whose honour it is made',
    section_desc:
      'Where the acceptance does not express for whose honour it is made, it shall be deemed to be made for the honour of the drawer.',
  },
  {
    chapter: 11,
    section: 111,
    section_title: 'Liability of acceptor for honour',
    section_desc:
      'An acceptor for honour binds himself to all parties subsequent to the party for whose honour he accepts to pay the amount of the bill if the drawee do not; and such party and all prior parties are liable in their respective capacities to compensate the acceptor for honour for all loss or damage sustained by him in consequence of such acceptance.\nBut an acceptor for honour is not liable to the holder of the bill unless it is presented, or (in case the address given by such\nacceptor on the bill is a place other than the place where the bill is made payable) forwarded for presentment, not later than the day next after the day of its maturity.',
  },
  {
    chapter: 11,
    section: 112,
    section_title: 'When acceptor for honour may be charged',
    section_desc:
      'An acceptor for honour cannot be charged unless the bill has at its maturity been presented to the drawee for payment, and has been dishonoured by him, and noted or protested for such dishonour.',
  },
  {
    chapter: 11,
    section: 113,
    section_title: 'Payment for honour',
    section_desc:
      'When a bill of exchange has been noted or protested for nonpayment, any person may pay the same for the honour of any party liable to pay the same, provided that the person so paying or his agent in that behalf has previously declared before a notary public the party for whose honour he pays, and that such declaration has been recorded by such notary public.',
  },
  {
    chapter: 11,
    section: 114,
    section_title: 'Right of payer for honour',
    section_desc:
      'Any person so paying is entitled to all the rights, in respect of the bill, of the holder at the time of such payment, and may recover from the party for whose honour he pays all sums so paid, with interest thereon and with all expenses properly incurred in making such payment.',
  },
  {
    chapter: 11,
    section: 115,
    section_title: 'Drawee in case of need',
    section_desc:
      'Where a drawee in case of need is named in a bill of exchange, or in any indorsement thereon, the bill is not dishonoured until it has been dishonoured by such drawee.',
  },
  {
    chapter: 11,
    section: 116,
    section_title: 'Acceptance and payment without protest',
    section_desc:
      'A drawee in case of need may accept and pay the bill of exchange without previous protest.',
  },
  {
    chapter: 12,
    section: 117,
    section_title: 'Rules as to compensation',
    section_desc:
      'The compensation payable in case of dishonour of a promissory note, bill of exchange or cheque, by any party liable to the holder or any indorsee, shall be determined by the following rules:\n\t\n\t\tthe holder is entitled to the amount due upon the instrument, together with the expenses properly incurred in presenting, noting and protesting it;\n\t\twhen the person charged resides at a place different from that at which the instrument was payable, the holder is entitled to receive such sum at the current rate of exchange between the two places;\n\t\tan indorser who, being liable, has paid the amount due on the same is entitled to the amount so paid with interest at eighteen per centum per annum from the date of payment until tender or realization thereof, together with all expenses caused by the dishonour and payment;\n\t\twhen the person charged and such indorser reside at different places, the indorser is entitled to receive such sum at the current rate of exchange between the two places;\n\t\tthe party entitled to compensation may draw a bill upon the party liable to compensate him, payable at sight or on demand, for the amount due to him, together with all expenses properly incurred by him. Such bill must be accompanied by the instrument dishonoured and the protest thereof (if any). If such bill is dishonoured, the party dishonouring the same is liable to make compensation thereof in the same manner as in the case of the original bill.',
  },
  {
    chapter: 13,
    section: 118,
    section_title: 'Presumptions as to negotiable instruments',
    section_desc:
      'Until the contrary is proved, the following presumptions shall be made:\n\t\n\t\tof consideration; that every negotiable instrument was made or drawn for consideration, and that every such instrument, when it has been accepted, indorsed, negotiated or transferred, was accepted, indorsed, negotiated or transferred for consideration;\n\t\tas to date; that every negotiable instrument bearing a date was made or drawn on such date;\n\t\tas to time of acceptance; that every accepted bill of exchange was accepted within a reasonable time after its date and before its maturity;\n\t\tas to time of transfer; that every transfer of a negotiable instrument was made before its maturity;\n\t\tas to order of indorsements; that the indorsements appearing upon a negotiable instrument were made in the order in which they appear thereon;\n\t\tas to stamp; that a lost promissory note, bill of exchange or cheque was duly stamped;\n\t\tthat holder is a holder in due course; that the holder of a negotiable instrument is a holder in due course: Provided that, where the instrument has been obtained from its lawful owner, or from any person in lawful custody thereof, by means of an SP offence or fraud, or has been obtained from the maker or acceptor thereof by means of an offence or fraud, or for unlawful consideration, the burthen of proving that the holder is a holder in due course lies upon him.',
  },
  {
    chapter: 13,
    section: 119,
    section_title: 'Presumption on proof of protest',
    section_desc:
      'In a suit upon an instrument which has been dishonoured, the Court shall, on proof of the protest, presume the fact of is dishonour, unless and until such fact is disproved.',
  },
  {
    chapter: 13,
    section: 120,
    section_title: 'Estoppel against denying original validity of instrument',
    section_desc:
      'No maker of a promissory note, and no drawer of a bill of exchange or cheque, and no acceptor of a bill of exchange for the honour of the drawer shall, in a suit thereon by a holder in due course, be permitted to deny the validity of the instrument as originally made or drawn.',
  },
  {
    chapter: 13,
    section: 121,
    section_title: 'Estoppel against denying capacity of payee to indorse',
    section_desc:
      'No maker of a promissory note and no acceptor of a bill of exchange payable to order shall, in a suit thereon by a holder in due course, be permitted to deny the payee’s capacity, at the date of the note or bill, to indorse the same.',
  },
  {
    chapter: 13,
    section: 122,
    section_title:
      'Estoppel against denying signature or capacity of prior party',
    section_desc:
      'No indorser of a negotiable instrument shall, in a suit thereon by a subsequent holder, be permitted to deny the signature or capacity to contract of any prior party to the instrument.',
  },
  {
    chapter: 14,
    section: 123,
    section_title: 'Cheque crossed generally',
    section_desc:
      'Where a cheque bears across its face an addition of the words “and company” or any abbreviation thereof, between two parallel transverse lines, or of two parallel transverse lines simply, either with or without the words “not negotiable”, that addition shall be deemed a crossing, and the cheque shall be deemed to be crossed generally.',
  },
  {
    chapter: 14,
    section: 124,
    section_title: 'Cheque crossed specially',
    section_desc:
      'Where a cheque bears across its face an addition of the name of a banker, either with or without the words “not negotiable”, that addition shall be deemed a crossing, and the cheque shall be deemed to be crossed specially, and to be crossed to that banker.',
  },
  {
    chapter: 14,
    section: 125,
    section_title: 'Crossing after issue',
    section_desc:
      'Where a cheque is uncrossed, the holder may cross it generally or specially.\nWhere a cheque is crossed generally, the holder may cross it specially.\nWhere a cheque is crossed generally or specially, the holder may add the words “not negotiable”.\nWhere a cheque is crossed specially, the banker to whom it is crossed may again cross it specially to another banker. his agent, for collection.',
  },
  {
    chapter: 14,
    section: 126,
    section_title: 'Payment of cheque crossed generally',
    section_desc:
      'Where a cheque is crossed generally, the banker on whom it is drawn shall not pay it otherwise than to a banker.\nPayment of cheque crossed specially. Where a cheque is crossed specially, the banker on whom it is drawn shall not pay it otherwise than to the banker to whom it is crossed, or his agent for collection.',
  },
  {
    chapter: 14,
    section: 127,
    section_title: 'Payment of cheque crossed specially more than once',
    section_desc:
      'Where a cheque is crossed specially to more than one banker, except when crossed to an agent for the purpose of collection, the banker on whom it is drawn shall refuse payment thereof.',
  },
  {
    chapter: 14,
    section: 128,
    section_title: 'Payment in due course of crossed cheque',
    section_desc:
      'Where the banker on whom a crossed cheque is drawn, has paid the same in due course, the banker paying the cheque, and in case such cheque has come to the hands of the payee) the drawer thereof, shall respectively be entitled to the same rights, and be placed in the same position in all respects, as they would respectively be entitled to and placed in if the amount of the cheque bad been paid to and received by the true owner thereof.',
  },
  {
    chapter: 14,
    section: 129,
    section_title: 'Payment of crossed cheque out of due course',
    section_desc:
      'Any banker paying a cheque crossed generally otherwise than to a banker, or a cheque crossed specially otherwise than to the banker to whom the same is crossed, or his agent for collection, being a banker, shall be liable to the true owner of the cheque for any loss he may sustain owing to the cheque having been so paid.',
  },
  {
    chapter: 14,
    section: 130,
    section_title: 'Cheque bearing "not negotiable',
    section_desc:
      'A person taking a cheque crossed generally or specially, bearing in either case the words “not negotiable”, shall not have, and shall not be capable of giving, a better title to the cheque than that which the person from whom he took it had.',
  },
  {
    chapter: 14,
    section: 131,
    section_title: 'Non-liability of banker receiving payment of cheque',
    section_desc:
      'A banker who has in good faith and without negligence received payment for a customer of a cheque crossed generally or specially to himself shall not, in case the title to the cheque proves defective, incur any liability to, the true owner of the cheque by reason only of having received such payment.\n\nExplanations\n\n\t\n\t\tA banker receives payment of a crossed cheque for a customer within the meaning of this section notwithstanding that he credits his customer’s account with the amount of the cheque before receiving payment thereof.\n\t\tIt shall be the duty of the banker who receives payment based on an electronic image of a truncated cheque held with him, to verify the prima facie genuineness of the cheque to be truncated and any fraud, forgery or tampering apparent on the face of the instrument that can be verified with due diligence and ordinary care.',
  },
  {
    chapter: 14,
    section: '131A',
    section_title: 'Application of Chapter to drafts',
    section_desc:
      'The provisions of this chapter shall apply to any draft, as defined in section 85A, as if the draft were a cheque.',
  },
  {
    chapter: 15,
    section: 132,
    section_title: 'Set of bills',
    section_desc:
      'Bills of exchange may be drawn in parts, each part being numbered and containing a provision that it shall continue payable only so long as the others remain unpaid. All the parts together make a set; but the whole set constitutes only one bill, and is extinguished when one of the parts, if a separate bill, would be extinguished.',
  },
  {
    chapter: 15,
    section: 133,
    section_title: 'Holder of first acquired part entitled to all',
    section_desc:
      'As between holders in due course of different parts of the same set, he who first acquired title to his part is entitled to the other parts and the money represented by the bill.',
  },
  {
    chapter: 16,
    section: 134,
    section_title:
      'Law governing liability of maker, acceptor or indorser of foreign instrument',
    section_desc:
      'In the absence of a contract to the contrary, the liability of the maker or drawer of a foreign promissory note, bill of exchange or cheque is regulated in all essential matters by the law of the place where he made the instrument, and the respective liabilities of the acceptor and indorser by the law of the place where the instrument is made payable.',
  },
  {
    chapter: 16,
    section: 135,
    section_title: 'Law of place of payment governs dishonour',
    section_desc:
      'Where a promissory note, bill of exchange or cheque is made payable in a different place from that in which it is made or indorsed, the law of the place where it is made payable determines what constitutes dishonour and what notice of dishonour is sufficient.',
  },
  {
    chapter: 16,
    section: 136,
    section_title:
      'Instrument made, etc., out of India, but in accordance with the law of India.',
    section_desc:
      'If a negotiable instrument is made, drawn, accepted or indorsed outside India, but in accordance with the law of India, the circumstance that any agreement evidenced by such instrument is invalid according to the law of the country wherein it was entered into does not invalidate any subsequent acceptance or indorsement made thereon within India.',
  },
  {
    chapter: 16,
    section: 137,
    section_title: 'Presumption as to foreign law',
    section_desc:
      'The law of any foreign country regarding promissory notes, bills of exchange and cheques shall\nbe presumed to be the same as that of India, unless and until the contrary is proved.',
  },
  {
    chapter: 17,
    section: 138,
    section_title:
      'Dishonour of cheque for insufficiency, etc., of funds in the account.',
    section_desc:
      'Where any cheque drawn by a person on an account maintained by him with a banker for payment of any amount of money to another person from out of that account for the discharge, in whole or in part, of any debt or other liability, is returned by the bank unpaid, either because of the amount of money standing to the credit of that account is insufficient to honour the cheque or that it exceeds the amount arranged to be paid from that account by an agreement made with that bank, such person shall be deemed to have committed an offence and shall, without prejudice to any other provision of this Act, be punished with imprisonment for a term which may be extended to two years, or with fine which may extend to twice the amount of the cheque, or with both:\nProvided that nothing contained in this section shall apply unless:\n\t\n\t\tthe cheque has been, presented to the bank within a period of six months from the date on which it is drawn or within the period of its validity, whichever is earlier;\n\t\tthe payee or the holder in due course of the cheque as the case may be, makes a demand for the payment of the said amount of money by giving a notice, in writing, to the drawer of the cheque, within thirty1 days of the receipt of information by him from the bank regarding the return of the cheque as unpaid; and\n\t\tthe drawer of such cheque fails to make the payment of the said amount of money to the payee or, as the case may be, to the holder in due course of the cheque, within fifteen days of the receipt of the said notice.\n\t\n\n1 Changed from fifteen by amendment act of 2015',
  },
  {
    chapter: 17,
    section: 139,
    section_title: 'Presumption in favour of holder',
    section_desc:
      'It shall be presumed, unless the contrary is proved, that the holder of a cheque received the cheque of the nature referred to in section 138 for the discharge, in whole or in part, of any debt or other liability.',
  },
  {
    chapter: 17,
    section: 140,
    section_title:
      'Defence which may not be allowed in any prosecution under section 138',
    section_desc:
      'It shall not be a defence in a prosecution for an offence under section 138 that the drawer had no reason to believe when he issued the cheque that the cheque may be dishonoured on presentment for the reasons stated in that section.',
  },
  {
    chapter: 17,
    section: 141,
    section_title: 'Offences by companies.',
    section_desc:
      'If the person committing an offence under section 138 is a company, every person who, at the time the offence was committed, was in charge of, and was responsible to, the company for the conduct of the business of the company, as well as the company, shall be deemed to be guilty of the offence and shall be liable to be proceeded against and punished accordingly:\nProvided that nothing contained in this sub-section shall render any person liable to punishment if he proves that the offence was committed without his knowledge, or that he had exercised all due diligence to prevent the commission of such offence.\n\t\tNotwithstanding anything contained in sub-section (1), where any offence under this Act has been committed by a company and it is proved that the offence has been committed with the consent or connivance of, or is attributable to, any neglect on the part of, any director, manager, secretary or other officer of the company, such director, manager, secretary or other officer shall also be deemed to be guilty of that offence and shall be liable to be proceeded against and punished accordingly.',
  },
  {
    chapter: 17,
    section: 142,
    section_title: 'Cognizance of offences',
    section_desc:
      'Notwithstanding anything contained in the Code of Criminal Procedure, 1973 (2 of 1974),-\n\t\n\t\tno court shall take cognizance of any offence punishable under section 138 except upon a complaint, in writing, made by the payee or, as the case may be, the holder in due course of the cheque;\n\t\tsuch complaint is made within one month of the date on which the cause of action arises under clause ( c ) of the proviso to section 138;\n\t\tno court inferior to that of a Metropolitan Magistrate or a Judicial Magistrate of the first class shall try any offence punishable under section 138.',
  },
  {
    chapter: 17,
    section: '142A',
    section_title: 'Validation for transfer of pending cases',
    section_desc:
      'Notwithstanding anything contained in the Code of Criminal Procedure, 1973 or any judgment, decree, order or direction of any court, all cases transferred to the court having jurisdiction under sub-section (2) of section 142, as amended by the Negotiable Instruments (Amendment) Ordinance, 2015, shall be deemed to have been transferred under this Act, as if that sub-section had been in force at all material times.\n\t\tNotwithstanding anything contained in sub-section (2) of section 142 or sub-section (1), where the payee or the holder in due course, as the case may be, has filed a complaint against the drawer of a cheque in the court having jurisdiction under sub-section (2) of section 142 or the case has been transferred to that court under sub-section (1) and such complaint is pending in that court, all subsequent complaints arising out of section 138 against the same drawer shall be filed before the same court irrespective of whether those cheques were delivered for collection or presented for payment within the territorial jurisdiction of that court.\n\t\tIf, on the date of the commencement of the Negotiable Instruments (Amendment) Act, 2015, more than one prosecution filed by the same payee or holder in due course, as the case may be, against the same drawer of cheques is pending before different courts, upon the said fact having been brought to the notice of the court, such court shall transfer the case to the court having jurisdiction under sub-section (2) of section 142, as amended by the Negotiable Instruments (Amendment) Ordinance, 2015, before which the first case was filed and is pending, as if that sub-section had been in force at all material times.',
  },
  {
    chapter: 17,
    section: 143,
    section_title: 'Power of Court to try cases summarily',
    section_desc:
      'Notwithstanding anything contained in the Code of Criminal Procedure, 1973 (2 of 1974), all offences under this Chapter shall be tried by a Judicial Magistrate of the first class or by a Metropolitan Magistrate and the provisions of sections 262 to 265 (both inclusive) of the said Code shall, as far as may be, apply to such trials:\nProvided that in the case of any conviction in a summary trial under this section, it shall be lawful for the Magistrate to pass a sentence of imprisonment for a term not exceeding one year and an amount of fine exceeding five thousand rupees:\nProvided further that when at the commencement of, or in the course of, a summary trial under this section, it appears to the Magistrate that the nature of the case is such that a sentence of imprisonment for a term exceeding one year may have to be passed or that it is, for any other reason, undesirable to try the case summarily, the Magistrate shall after hearing the parties, record an order to that effect and thereafter recall any witness who may have been examined and proceed to hear or rehear the case in the manner provided by the said Code.\n\t\tThe trial of a case under this section shall, so far as practicable, consistently with the interests of justice, be continued from day to day until its conclusion, unless the Court finds the adjournment of the trial beyond the following day to be necessary for reasons to be recorded in writing.\n\t\tEvery trial under this section shall be conducted as expeditiously as possible and an endeavour shall be made to conclude the trial within six months from the date of filing of the complaint.',
  },
  {
    chapter: 17,
    section: '143A',
    section_title: 'Power to direct interim compensation',
    section_desc:
      'Notwithstanding anything contained in the Code of Criminal Procedure, 1973, the Court trying an offence under section 138 may order the drawer of the cheque to pay interim compensation1 to the complainant—\n\t\t\n\t\t\tin a summary trial or a summons case, where he pleads not guilty to the accusation made in the complaint; and\n\t\t\tin any other case, upon framing of charge.\n\t\t\n\t\tThe interim compensation under sub-section (1) shall not exceed twenty percent of the amount of the cheque.\n\t\tThe interim compensation shall be paid within sixty days from the date of the order under sub-section (1), or within such further period not exceeding thirty days as may be directed by the Court on sufficient cause being shown by the drawer of the\ncheque.\n\t\tIf the drawer of the cheque is acquitted, the Court shall direct the complainant to repay to the drawer the amount of interim compensation, with interest at the bank rate as published by the Reserve Bank of India, prevalent at the beginning of the relevant financial year, within sixty days from the date of the order, or within such further period not exceeding thirty days as may be directed by the Court on sufficient cause being shown by the complainant.\n\t\tThe interim compensation payable under this section may be recovered as if it were a fine under section 421 of the Code of Criminal Procedure, 1973.\n\t\tThe amount of fine imposed under section 138 or the amount of compensation awarded under section 357 of the Code of Criminal Procedure, 1973, shall be reduced by the amount paid or recovered as interim compensation under this section.\n\t\n\n1 Negotiable Instruments (Amendment) Act, 2018',
  },
  {
    chapter: 17,
    section: 144,
    section_title: 'Mode of service of summons',
    section_desc:
      'Notwithstanding anything contained in the Code of Criminal Procedure, 1973 (2 of 1974), and for the purposes of this Chapter, a Magistrate issuing a summons to an accused or a witness may direct a copy of summons to be served at the place where such accused or witness ordinarily resides or carries on business or personally works for gain, by speed post or by such courier services as are approved by Court of Session.\n\t\tWhere an acknowledgment purporting to be signed by the accused or the witness or an endorsement purported to be made by any person authorised by the postal department or the courier services that the accused or the witness refused to take delivery of summons has been received, the Court issuing the summons may declare that the summons has been duly served.',
  },
  {
    chapter: 17,
    section: 145,
    section_title: 'Evidence on Affidavit',
    section_desc:
      'Notwithstanding anything contained in the Code of Criminal Procedure, 1973 (2 of 1974), the evidence of the complainant may be given by him on affidavit and may, subject to all just exceptions be read in evidence in any enquiry, trial or other proceeding under the said Code.\n\t\tThe Court may, if it thinks fit, and shall, on the application of the prosecution or the accused, summon and examine any person giving evidence on affidavit as to the facts contained therein.',
  },
  {
    chapter: 17,
    section: 146,
    section_title: "Bank's slip prima facie evidence for certain facts",
    section_desc:
      'The Court shall, in respect of every proceeding under this Chapter, on production of bank’s slip or memo having thereon the official mark denoting that the cheque has been dishonoured, presume the fact of dishonour of such cheque, unless and until such fact is disproved.',
  },
  {
    chapter: 17,
    section: 147,
    section_title: 'Offences to be compoundable',
    section_desc:
      'Notwithstanding anything contained in the Code of Criminal Procedure, 1973 (2 of 1974), every offence punishable under this Act shall be compoundable.',
  },
  {
    chapter: 17,
    section: 148,
    section_title:
      'Power of Appellate Court to order payment pending appeal against conviction',
    section_desc:
      'Notwithstanding anything contained in the Code of Criminal Procedure, 1973, in an appeal by the drawer against conviction under section 138, the Appellate Court may order the appellant to deposit1 such sum which shall be a minimum of twenty percent of the fine or compensation awarded by the trial Court:\nProvided that the amount payable under this sub-section shall be in addition to\nany interim compensation paid by the appellant under section 143A.\n\t\tThe amount referred to in sub-section (1) shall be deposited within sixty days from the date of the order, or within such further period not exceeding thirty days as may be directed by the Court on sufficient cause being shown by the appellant.\n\t\tThe Appellate Court may direct the release of the amount deposited by the appellant to the complainant at any time during the pendency of the appeal:\nProvided that if the appellant is acquitted, the Court shall direct the complainant to repay to the appellant the amount so released, with interest at the bank rate as published by the Reserve Bank of India, prevalent at the beginning of the relevant financial year, within sixty days from the date of the order, or within such further period not exceeding thirty days as may be directed by the Court on sufficient cause being shown by the complainant.\n\t\n\n1 Negotiable Instruments (Amendment) Act, 2018',
  },
];
export default nia;