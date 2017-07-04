/* eslint-disable quotes*/

// Italian
// Last sync with en.js     : commit 459ba23623e1fa13c3d468277ef5dad5070542d2
module.exports = {
  code: 'it',
  data: {
    /* Navigation*/
    NAV_AddWallet: 'Aggiungi portafoglio ',
    NAV_BulkGenerate: 'Generazione multipla ',
    NAV_Contact: 'Contatti ',
    NAV_Contracts: 'Contratti ',
    NAV_DeployContract: 'Pubblica contratto ',
    NAV_ENS: 'ENS',
    NAV_GenerateWallet: 'Genera portafoglio ',
    NAV_Help: 'Aiuto ',
    NAV_InteractContract: 'Interagisci con un contratto ',
    NAV_Multisig: 'Multifirma ',
    NAV_MyWallets: 'I miei portafogli ',
    NAV_Offline: 'Invia offline ',
    NAV_SendEther: 'Invia ether e token ',
    NAV_SendTokens: 'Invia token ',
    NAV_SignMsg: 'Firma messaggio ',
    NAV_Swap: 'Scambia ',
    NAV_ViewWallet: 'Informazioni portafoglio ',
    NAV_YourWallets: 'I tuoi portafogli ',

    /* General */
    x_Access: 'Accedi ',
    x_AddessDesc:
      'Potresti sentirlo chiamare "Numero di conto" o "Chiave pubblica". È ciò che dai a chi ti vuole inviare degli ether. L\'icona è un modo facile di riconoscere il tuo indirizzo. ',
    x_Address: 'Il tuo indirizzo ',
    x_Cancel: 'Annulla ',
    x_CSV: 'File CSV (non crittografato) ',
    x_Download: 'Download ',
    x_Json: 'File JSON (non crittografato) ',
    x_JsonDesc:
      'Questa è la tua chiave privata in formato JSON non crittografato. Significa che non hai bisogno della password, ma chiunque trovi questo file JSON potrà avere accesso al tuo portafoglio e ai tuoi ether senza password. ',
    x_Keystore: 'File Keystore (UTC / JSON · Consigliato · Crittografato) ',
    x_Keystore2: 'File Keystore (UTC / JSON) ',
    x_KeystoreDesc:
      'Questo file Keystore è compatibile con il formato usato da Mist, in modo da poterlo facilmente importare in futuro. È il file consigliato da scaricare e conservare. ',
    x_Mnemonic: 'Frase mnemonica ',
    x_ParityPhrase: 'Frase di Parity ',
    x_Password: 'Password ',
    x_Print: 'Stampa portafoglio cartaceo ',
    x_PrintDesc:
      'Suggerimento Pro: Fai clic su stampa e salvalo come PDF, anche se non hai una stampante! ',
    x_PrintShort: 'Stampa ',
    x_PrivKey: 'Chiave privata (non crittografata) ',
    x_PrivKey2: 'Chiave privata ',
    x_PrivKeyDesc:
      'Questa è la versione testuale non crittografata della tua chiave privata, il che significa che non serve una password. Se qualcuno trovasse la tua chiave privata non crittografata potrebbe avere accesso al tuo portafoglio senza una password. Per questa ragione di solito si consigliano le versioni crittografate. ',
    x_Save: 'Salva ',
    x_TXT: 'File TXT (non crittografato) ',
    x_Wallet: 'Portafoglio ',

    /* Header */
    MEW_Warning_1:
      "Controlla sempre l'URL prima di accedere al tuo portafoglio o di crearne uno nuovo. Fai attenzione ai siti di phishing! ",
    CX_Warning_1:
      "Assicurati di avere **dei backup esterni** di ogni portafoglio salvato qui. Ci sono molte cose che potrebbero causare la perdita dei dati di questa estensione di Chrome, come la disinstallazione e reinstallazione dell'estensione. Questa estensione è un mezzo per accedere facilmente ai tuoi portafogli, **non** un modo di salvarli al sicuro. ",
    MEW_Tagline: 'Portafoglio ether JavaScript lato client Open Source ',
    CX_Tagline:
      'Portafoglio ether JavaScript lato client Open Source (Estensione Chrome) ',

    /* Footer */
    FOOTER_1:
      'Strumento open source lato client per interagire facilmente e in modo sicuro con la rete Ethereum. ',
    FOOTER_1b: 'Creato da ',
    FOOTER_2: 'Donazioni molto apprezzate: ',
    FOOTER_3: 'Generazione portafogli lato client da parte di ',
    FOOTER_4: 'Dichiarazione di non responsabilità ',

    /* Sidebar */
    sidebar_AccountInfo: 'Informazioni conto ',
    sidebar_AccountAddr: 'Indirizzo conto ',
    sidebar_AccountBal: 'Saldo conto ',
    sidebar_TokenBal: 'Saldo token ',
    sidebar_Equiv: 'Valori equivalenti ',
    sidebar_TransHistory: 'Storico transazioni ',
    sidebar_donation:
      'MyEtherWallet è un servizio gratuito e open-source votato alla tua privacy e sicurezza. Più donazioni riceviamo, più tempo dedichiamo a creare nuove funzionalità, considerare i tuoi commenti, e darti ciò che vuoi. Siamo solo due persone che provano a cambiare il mondo. Ci aiuti? ',
    sidebar_donate: 'Dona ',
    sidebar_thanks: 'GRAZIE!!! ',

    /* Decrypt Panel */
    decrypt_Access: 'Come vuoi accedere al tuo portafoglio? ',
    decrypt_Title: 'Seleziona il formato della tua chiave privata: ',
    decrypt_Select: 'Seleziona un portafoglio: ',

    /* Add Wallet */
    ADD_Label_1: 'Cosa vuoi fare? ',
    ADD_Radio_1: 'Genera un nuovo portafoglio ',
    ADD_Radio_2: 'Seleziona il file del tuo portafoglio (Keystore / JSON) ',
    ADD_Radio_2_alt: 'Seleziona il file del tuo portafoglio ',
    ADD_Radio_2_short: 'SELEZIONA FILE PORTAFOGLIO... ',
    ADD_Radio_3: 'Incolla/Inserisci la tua chiave privata ',
    ADD_Radio_4: 'Aggiungi un conto da osservare ',
    ADD_Radio_5: 'Incolla/Inserisci la tua frase mnemonica ',
    ADD_Radio_5_Path: 'Seleziona un percorso di derivazione HD ',
    ADD_Radio_5_PathCustom: 'altro',
    ADD_Label_2: 'Crea un nome: ',
    ADD_Label_3: 'Il portafoglio è crittografato. Inserire la password ',
    ADD_Label_4: 'Aggiungi un conto da osservare ',
    ADD_Warning_1:
      'Puoi aggiungere qualunque conto da "osservare" nella scheda dei portafogli senza caricare una chiave privata. Ciò ** non ** significa che avrai accesso a quel portafoglio, né che potrai trasferire gli Ether lì contenuti. ',
    ADD_Label_5: "Inserisci l'indirizzo ",
    ADD_Label_6: 'Sblocca portafoglio ',
    ADD_Label_6_short: 'Sblocca ',
    ADD_Label_7: 'Aggiungi conto ',
    ADD_Label_8: 'Password (facoltativo): ',

    /* Generate Wallets */
    GEN_desc: 'Se vuoi generare più portafogli, puoi farlo qui ',
    GEN_Label_1: 'Inserisci una password robusta (almeno 9 caratteri) ',
    GEN_Placeholder_1: 'NON dimenticarti di salvarla! ',
    GEN_SuccessMsg: 'Perfetto! Il tuo portafoglio è stato generato. ',
    GEN_Label_2:
      'Salva il file del tuo portafoglio. Non dimenticare la password che hai inserito. ',
    GEN_Label_3: 'Salva il tuo indirizzo. ',
    GEN_Label_4:
      'Facoltativo: stampa il tuo portafoglio cartaceo o salva una versione QR code. ',

    /* Bulk Generate Wallets */
    BULK_Label_1: 'Numero di portafogli da generare ',
    BULK_Label_2: 'Genera portafogli ',
    BULK_SuccessMsg: 'Perfetto! I tuoi portafogli sono stati generati. ',

    /* Sending Ether and Tokens */
    SEND_addr: 'Indirizzo destinatario ',
    SEND_amount: 'Importo da inviare ',
    SEND_amount_short: 'Importo ',
    SEND_custom: 'Aggiungi altro token ',
    SEND_gas: 'Gas ',
    SEND_generate: 'Genera transazione ',
    SEND_raw: 'Transazione grezza ',
    SEND_signed: 'Transazione firmata ',
    SEND_trans: 'Invia transazione ',
    SEND_TransferTotal: "Invia l'intero saldo ",
    SENDModal_Title: 'Attenzione! ',
    /* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
    SENDModal_Content_1: 'Stai per inviare ',
    SENDModal_Content_2: "all'indirizzo ",
    SENDModal_Content_3: 'Sei sicuro di volerlo fare? ',
    SENDModal_Content_4:
      'NOTA: Se ricevi un errore, molto probabilmente dovrai aggiungere ether al tuo conto per coprire il costo del gas necessario ad inviare i token. Il gas si paga in ether. ',
    SENDModal_No: 'No, tiratemi fuori da qui! ',
    SENDModal_Yes: 'Sì, sono sicuro! Esegui la transazione. ',

    /* Tokens */
    TOKEN_Addr: 'Indirizzo ',
    TOKEN_Symbol: 'Simbolo del token ',
    TOKEN_Dec: 'Decimali ',
    TOKEN_show: 'Mostra tutti i token ',
    TOKEN_hide: 'Nascondi token ',

    /* Send Transaction */
    TRANS_desc:
      'Se invece volevi inviare dei token, utilizza la pagina "Invia token". ',
    TRANS_warning:
      'Se usi le opzioni "Solo ETH" o "Solo ETC" invierai tramite un contratto. Certi servizi hanno difficoltà ad accettare queste transazioni. Leggi tutto. ',
    TRANS_advanced: '+Avanzate: aggiungi dati ',
    TRANS_data: 'Dati ',
    TRANS_gas: 'Limite gas ',
    TRANS_sendInfo:
      'Una transazione standard che utilizza 21000 gas costerà 0,000441 ETH. Utilizziamo un prezzo del gas leggermente al di sopra del minimo pari a 0,000000021 ETH per assicurarci che venga elaborata velocemente. Noi non prendiamo commissioni. ',

    /* Offline Transaction */
    OFFLINE_Title: 'Genera & invia una transazione offline ',
    OFFLINE_Desc:
      'Per generare transazioni offline sono necessari tre passaggi. Svolgerai i passi 1 e 3 su un computer online, e il passo 2 su un computer offline/*air-gapped*. Questo per assicurarsi che le tue chiavi private non tocchino un dispositivo connesso a Internet. ',
    OFFLLINE_Step1_Title:
      'Passo 1: generazione delle informazioni (computer online) ',
    OFFLINE_Step1_Button: 'Genera informazioni ',
    OFFLINE_Step1_Label_1: 'Indirizzo mittente ',
    OFFLINE_Step1_Label_2:
      "Nota: Questo è l'indirizzo MITTENTE, non l'indirizzo DESTINATARIO. Il *nonce* è generato dal conto di origine. Se stessi usando un computer *air-gapped*, sarebbe l'indirizzo del conto offline. ",
    OFFLINE_Step2_Title:
      'Passo 2: generazione della transazione (computer offline) ',
    OFFLINE_Step2_Label_1: 'Indirizzo destinatario ',
    OFFLINE_Step2_Label_2: 'Valore / importo da inviare ',
    OFFLINE_Step2_Label_3: 'Prezzo gas ',
    OFFLINE_Step2_Label_3b:
      'Questo valore è stato mostrato nel passo 1 sul computer online. ',
    OFFLINE_Step2_Label_4: 'Limite gas ',
    OFFLINE_Step2_Label_4b:
      '21000 è il limite gas predefinito. Quando invii a contratti o aggiungi dati potresti aver bisogno di un valore maggiore. Eventuale gas non utilizzato ti sarà restituito. ',
    OFFLINE_Step2_Label_5: 'Nonce ',
    OFFLINE_Step2_Label_5b:
      'Questo valore è stato mostrato nel passo 1 sul computer online. ',
    OFFLINE_Step2_Label_6: 'Dati ',
    OFFLINE_Step2_Label_6b:
      'Facoltativo. I dati sono usati spesso nelle transazioni inviate ai contratti. ',
    OFFLINE_Step2_Label_7:
      'Inserisci / seleziona la tua chiave privata o JSON. ',
    OFFLINE_Step3_Title:
      'Passo 3: Invia / pubblica la transazione (computer online) ',
    OFFLINE_Step3_Label_1:
      'Incolla la transazione firmata dal passo 2 qui e premi il pulsante "INVIA TRANSAZIONE". ',

    /* Sign Message */
    MSG_message: 'Messaggio ',
    MSG_date: 'Data ',
    MSG_signature: 'Firma ',
    MSG_verify: 'Verifica messaggio ',
    MSG_info1:
      'Inserisci la data corrente per far sì che la firma non possa essere riutilizzata in un altro momento. ',
    MSG_info2:
      'Indica il tuo nickname e dove lo usi in modo che qualcun altro non possa usarlo. ',
    MSG_info3:
      'Includi una ragione specifica per il messaggio, così che non possa essere riutilizzato per uno scopo diverso. ',

    /* My Wallet */
    MYWAL_Nick: 'Nome portafoglio ',
    MYWAL_Address: 'Indirizzo portafoglio ',
    MYWAL_Bal: 'Saldo ',
    MYWAL_Edit: 'Modifica ',
    MYWAL_View: 'Mostra ',
    MYWAL_Remove: 'Rimuovi ',
    MYWAL_RemoveWal: 'Rimozione portafoglio: ',
    MYWAL_WatchOnly: 'I tuoi conti osservati ',
    MYWAL_Viewing: 'Dettagli portafoglio ',
    MYWAL_Hide: 'Nascondi informazioni portafoglio ',
    MYWAL_Edit_2: 'Modifica portafoglio ',
    MYWAL_Name: 'Nome portafoglio ',
    MYWAL_Content_1: 'Attenzione! Stai per rimuovere il tuo portafoglio ',
    MYWAL_Content_2:
      'Assicurati di aver **salvato la chiave privata e/o il file Keystore e la password** prima di rimuoverlo. ',
    MYWAL_Content_3:
      'Se vorrai utilizzare questo portafoglio con MyEtherWallet CX in futuro, dovrai ri-aggiungerlo manualmente tramite la chiave privata/JSON e password. ',

    /* View Wallet Details */
    VIEWWALLET_Subtitle:
      'Qui è possibile scaricare diverse versioni delle chiavi private e ristampare il portafoglio cartaceo. Potresti volerlo fare per  [importare il tuo conto in Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Se vuoi controllare il tuo saldo, ti consigliamo di utilizzare uno strumento per esplorare la *blockchain* come [etherscan.io](http://etherscan.io/). ',
    VIEWWALLET_Subtitle_Short:
      'Qui è possibile scaricare diverse versioni delle chiavi private e ristampare il portafoglio cartaceo. ',
    VIEWWALLET_SuccessMsg:
      'Perfetto! Questi sono i dettagli del tuo portafoglio. ',
    VIEWWALLET_ShowPrivKey: '(mostra)',
    VIEWWALLET_HidePrivKey: '(nascondi)',

    /* Mnemonic */
    MNEM_1: "Seleziona l'indirizzo col quale vuoi interagire. ",
    MNEM_2:
      "Con una singola frase mnemonica puoi avere accesso a un certo numero di portafogli / indirizzi. Seleziona l'indirizzo con il quale vuoi interagire in questo momento. ",
    MNEM_more: 'Altri indirizzi ',
    MNEM_prev: 'Indirizzi precedenti ',

    /* Hardware wallets */
    x_Ledger: 'Ledger Nano S ',
    ADD_Ledger_0a: 'Riapri MyEtherWallet su una connessione sicura (SSL) ',
    ADD_Ledger_0b:
      'Riapri MyEtherWallet utilizzando [Chrome](https://www.google.com/chrome/browser/desktop/) o [Opera](https://www.opera.com/) ',
    ADD_Ledger_1: 'Collega il tuo Ledger Nano S ',
    ADD_Ledger_2:
      "Apri l'applicazione Ethereum (o l'applicazione di un contratto) ",
    ADD_Ledger_3:
      'Verifica che il supporto browser sia abilitato nelle impostazioni ',
    ADD_Ledger_4:
      "Se non c'è l'opzione per il supporto browser nelle impostazioni, verifica di avere un [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ",
    ADD_Ledger_scan: 'Collegati al Ledger Nano S ',
    x_Trezor: 'TREZOR ',
    ADD_Trezor_scan: 'Collegati al TREZOR ',

    /* CX */
    CX_error_1:
      'Non c\'è nessun portafoglio. Fai clic su ["Aggiungi portafoglio"](/cx-wallet.html#add-wallet) per aggiungerne uno! ',
    CX_quicksend: 'Invio rapido ',

    /* Contracts */
    CONTRACT_Title: 'Indirizzo contratto ',
    CONTRACT_Title_2: 'Seleziona contratto esistente ',
    CONTRACT_Json: 'Interfaccia ABI / JSON ',
    CONTRACT_Interact_Title: 'Leggi da / Scrivi su contratto ',
    CONTRACT_Interact_CTA: 'Seleziona una funzione ',
    CONTRACT_ByteCode: 'Byte Code ',
    CONTRACT_Read: 'LEGGI ',
    CONTRACT_Write: 'SCRIVI ',
    DEP_generate: 'Genera bytecode ',
    DEP_generated: 'Bytecode generato ',
    DEP_signtx: 'Firma transazione ',
    DEP_interface: 'Interfaccia generata ',

    /* Node Switcher */
    NODE_Title: 'Configura nodo personalizzato',
    NODE_Subtitle: 'Per collegarti a un nodo locale...',
    NODE_Warning:
      'Il tuo nodo deve utilizzare HTTPS per potertici collegare da MyEtherWallet.com. Puoi [scaricare il repository di MyEtherWallet ed eseguirlo in locale](https://github.com/kvhnuke/etherwallet/releases/latest) per collegarti ad altri tipi di nodo. Oppure, ottieni un certificato SSL gratuito tramite [LetsEncrypt](https://letsencrypt.org/)',
    NODE_Name: 'Nome del nodo',
    NODE_Port: 'Porta del nodo',
    NODE_CTA: 'Salva & utilizza il nodo',

    /* Swap / Exchange */
    SWAP_rates: 'Tassi correnti ',
    SWAP_init_1: 'Voglio scambiare i miei ',
    SWAP_init_2: ' per ', // "I want to swap my X ETH for X BTC"
    SWAP_init_CTA: 'Facciamolo! ', // or "Continue"
    SWAP_information: 'Il tuo riepilogo ',
    SWAP_send_amt: 'Importo da inviare ',
    SWAP_rec_amt: 'Importo da ricevere ',
    SWAP_your_rate: 'Il tuo tasso ',
    SWAP_rec_add: 'Indirizzo di ricezione ',
    SWAP_start_CTA: 'Avvia scambio ',
    SWAP_ref_num: 'Il tuo codice di riferimento ',
    SWAP_time: "Tempo rimanente per l'invio ",
    SWAP_elapsed: "Tempo trascorso dall'invio ",
    SWAP_progress_1: 'Ordine creato ',
    SWAP_progress_2: 'In attesa dei tuoi ', // Waiting for your BTC...
    SWAP_progress_3: 'ricevuti! ', // ETH Received!
    SWAP_progress_4: 'Invio dei tuoi {{orderResult.output.currency}} ',
    SWAP_progress_5: 'Ordine completato ',
    SWAP_order_CTA: 'Invia ', // Please send 1 ETH...
    SWAP_unlock:
      'Sblocca il tuo portafoglio per inviare ETH o token direttamente da questa pagina. ',

    /* Error Messages */
    ERROR_0: 'Ti preghiamo di inserire una quantità valida. ',
    ERROR_1:
      'La password deve essere di almeno 9 caratteri. Assicurati che sia robusta. ',
    ERROR_2:
      'Siamo spiacenti! Non riconosciamo questo tipo di file portafoglio. ',
    ERROR_3: 'Questo non è un file portafoglio valido. ',
    ERROR_4:
      'Questa unità non esiste, ti preghiamo di usare una delle seguenti unità ',
    ERROR_5: 'Indirizzo non valido. ',
    ERROR_6: 'Password non valida. ',
    ERROR_7: 'Numero non valido. ',
    ERROR_8: 'Limite gas non valido. ',
    ERROR_9: 'Valori dati non validi. ',
    ERROR_10: 'Quantità di gas non valida. ',
    ERROR_11: 'Nonce non valido. ',
    ERROR_12: 'Transazione firmata non valida. ',
    ERROR_13: 'Esiste già un portafoglio con questo nome. ',
    ERROR_14: 'Portafoglio non trovato. ',
    ERROR_15:
      "Sembra che non esista ancora una proposta con questo ID o c'è un errore nella lettura della proposta. ",
    ERROR_16:
      "C'è già un portafoglio con questo indirizzo fra quelli salvati. Controlla la pagina dei tuoi portafogli. ",
    ERROR_17:
      "Ti servono **0,01 ETH** nel conto per coprire i costi del gas. Aggiungi un po' di ETH e riprova. ",
    ERROR_18:
      'Questa transazione consumerebbe tutto il gas. Ciò significa che hai già votato questa proposta o che il periodo di discussione è terminato. ',
    ERROR_19: 'Simbolo non valido ',
    ERROR_20: 'Non è un token ERC-20 valido. ',
    ERROR_21:
      "Impossibile eseguire una stima del gas necessario. Non ci sono abbastanza fondi nel conto, oppure l'indirizzo del contratto ricevente genererebbe un errore. Puoi inserire il gas manualmente e procedere. Il messaggio di errore al momento dell'invio potrebbe contenere ulteriori informazioni. ",
    ERROR_22: 'Inserisci un nome di nodo valido ',
    ERROR_23:
      'Inserisci un URL valido. Se ti stai collegando tramite HTTPS anche il nodo deve utilizzare HTTPS ',
    ERROR_24: 'Inserisci una porta valida ',
    ERROR_25: 'Inserisci un ID catena valido ',
    ERROR_26: 'Inserisci una ABI valida ',
    ERROR_27: 'Importo minimo: 0.01. Importo massimo: ',
    ERROR_28:
      "**Avrai bisogno del tuo file Keystore e della password** (o della chiave privata) per avere accesso a questo portafoglio in futuro. Ti preghiamo di salvarlo e copiarlo su un supporto esterno! Non c'è alcun modo per recuperare un portafoglio se non lo salvi. Leggi la [pagina di aiuto](https://www.myetherwallet.com/#help) per le istruzioni. ",
    ERROR_29: 'Inserisci un nome utente e una password validi ',
    ERROR_30: 'Inserisci un nome ENS valido ',
    ERROR_31: 'Frase segreta non valida ',
    ERROR_32:
      'Impossibile collegarsi al nodo. Aggiorna la pagina, o controlla la pagina di aiuto per ulteriori suggerimenti. ',
    ERROR_33:
      "L'indirizzo del portafoglio non è quello da cui si è fatta l'offerta. ",
    ERROR_34: "Il nome non corrisponde all'originale",
    SUCCESS_1: 'Indirizzo valido ',
    SUCCESS_2: 'Portafoglio decodificato correttamente ',
    SUCCESS_3:
      "La transazione è stata inviata alla blockchain. Fai clic per vederla e controllare che sia stata inclusa in un blocco e non si siano verificati errori relativi al gas o all'esecuzione del contratto.  TX ID:  ",
    SUCCESS_4: 'Il portafoglio è stato aggiunto correttamente ',
    SUCCESS_5: 'File selezionato ',
    SUCCESS_6: 'Ora sei connesso ',
    SUCCESS_7: 'Firma del messaggio verificata',
    WARN_Send_Link:
      'Sei arrivato qui da un link che ha riempito per te i campi indirizzo, importo, gas, dati o tipo di transazione (modalità di invio). Puoi cambiare queste informazioni prima di inviare. Sblocca il tuo portafoglio per iniziare. ',

    /* Geth Error Messages */
    GETH_InvalidSender: 'Mittente non valido ',
    GETH_Nonce: 'Nonce troppo basso ',
    GETH_Cheap: 'Prezzo del gas troppo basso per essere accettato ',
    GETH_Balance: 'Saldo insufficiente ',
    GETH_NonExistentAccount: 'Il conto non esiste o il saldo è insufficiente ',
    GETH_InsufficientFunds: 'Fondi insufficienti per gas * prezzo + valore ',
    GETH_IntrinsicGas: 'Gas intrinseco troppo basso ',
    GETH_GasLimit: 'Eccede il limite gas per il blocco ',
    GETH_NegativeValue: 'Valore negativo ',

    /* Parity Error Messages */
    PARITY_AlreadyImported:
      'È già stata importata una transazione con lo stesso hash.',
    PARITY_Old:
      'Il nonce della transazione è troppo basso. Prova ad incrementare il nonce.',
    PARITY_TooCheapToReplace:
      "La commissione per la transazione è troppo bassa. Nella coda c'è un'altra transazione con lo stesso nonce. Prova ad aumentare la commissione o ad incrementare il nonce.",
    PARITY_LimitReached:
      'Ci sono troppe transazioni nella coda. La tua transazione è stata scartata per il superamento del limite. Prova ad aumentare la commissione.',
    PARITY_InsufficientGasPrice:
      'La commissione per la transazione è troppo bassa. Non soddisfa la commissione minima del tuo nodo (minima: {}, fornita: {}). Prova ad aumentare la commissione.',
    PARITY_InsufficientBalance:
      "Fondi insufficienti. L'account dal quale stai provando ad inviare la transazione non ha abbastanza fondi. Richiesti {} ma presenti: {}.",
    PARITY_GasLimitExceeded:
      'Il costo della transazione eccede il limite gas corrente. Limite: {}, fornito: {}. Prova a ridurre il gas fornito.',
    PARITY_InvalidGasLimit: 'Il gas fornito supera il limite.',

    /* Tranlsation Info */
    translate_version: '0.3 ',
    Translator_Desc: 'Grazie ai nostri traduttori ',
    TranslatorName_1:
      '[ugilio](https://www.myetherwallet.com/?gaslimit=21000&to=0x07932bc1c68c8ff188f4225e892178ab6d8c4eaa&value=1.0#send-transaction) ',
    TranslatorAddr_1: '0x07932bc1c68c8ff188f4225e892178ab6d8c4eaa ',
    /* Translator 1             : Insert Comments Here */
    TranslatorName_2: '',
    TranslatorAddr_2: '',
    /* Translator 2             : Insert Comments Here */
    TranslatorName_3: '',
    TranslatorAddr_3: '',
    /* Translator 3             : Insert Comments Here */
    TranslatorName_4: '',
    TranslatorAddr_4: '',
    /* Translator 4             : Insert Comments Here */
    TranslatorName_5: '',
    TranslatorAddr_5: '',
    /* Translator 5             : Insert Comments Here */

    /* Help - Nothing after this point has to be translated. If you feel like being extra helpful, go for it. */
    HELP_Warning:
      'Se hai creato un portafoglio -oppure- hai scaricato il repository prima del **31 Dicembre 2015**, controlla i tuoi portafogli e scarica una nuova versione del repository. Fai clic qui per i dettagli. ',
    HELP_Desc:
      "Vedi che manca qualcosa? Hai un'altra domanda? [Mettiti in contatto con noi](mailto:support@myetherwallet.com), e non solo risponderemo alla tua domanda, ma aggiorneremo anche questa pagina in modo che sia più utile ad altri in futuro! ",
    HELP_Remind_Title: 'Qualche promemoria ',
    HELP_Remind_Desc_1:
      "**Ethereum, MyEtherWallet.com & MyEtherWallet CX, e alcune delle librerie Javascript che utilizziamo sono in continuo sviluppo.** Anche se abbiamo testato approfonditamente e persone di tutto il mondo hanno correttamente creato decine di migliaia di portafogli, c'è sempre la remota possibilità che accada qualcosa di imprevisto che provochi la perdita dei tuoi ETH. Ti preghiamo di non investire più di quello che sei disposto a perdere, e di fare attenzione. Se dovesse capitare qualcosa, ci dispiace, ma **non siamo responsabili per gli ether perduti**. ",
    HELP_Remind_Desc_2:
      'MyEtherWallet.com & MyEtherWallet CX non sono "portafogli web". Non stai creando un account né ci stai dando i tuoi ether da custodire. Tutti i dati non lasciano mai il tuo computer/il tuo browser. Quello che facciamo è renderti facile creare, salvare, e accedere alle tue informazioni e interagire con la *blockchain*. ',
    HELP_Remind_Desc_3:
      "Se non salvi la tua chiave privata e la password, non c'è modo di recuperare l'accesso al tuo portafoglio o ai fondi che contiene.  Salvali in molti luoghi fisici diversi e non solo sul tuo computer! ",

    HELP_0_Title: '0) Sono nuovo. Cosa faccio? ',
    HELP_0_Desc_1:
      'MyEtherWallet ti dà la possibilità di generare nuovi portafogli in modo da poter conservare i tuoi ether da solo, invece di usare una piattaforma di scambio. Questo processo avviene interamente sul tuo computer, non sui nostri server. Quindi, quando generi un nuovo portafoglio, **sei responsabile del suo salvataggio in maniera sicura**. ',
    HELP_0_Desc_2: 'Crea un nuovo portafoglio. ',
    HELP_0_Desc_3: 'Fai un backup del portafoglio. ',
    HELP_0_Desc_4:
      'Verifica di avere accesso a questo nuovo portafoglio e di avere salvato correttamente tutte le informazioni necessarie. ',
    HELP_0_Desc_5: 'Trasferisci degli ether in questo nuovo portafoglio. ',

    HELP_1_Title: '1) Come creo un nuovo portafoglio? ',
    HELP_1_Desc_1: 'Vai alla pagina "Genera portafoglio". ',
    HELP_1_Desc_2:
      'Vai alla pagina "Aggiungi portafoglio" e seleziona "Genera un nuovo portafoglio" ',
    HELP_1_Desc_3:
      'Inserisci una password robusta. Se pensi di poterla dimenticare, salvala in un posto sicuro. Avrai bisogno di questa password per inviare transazioni. ',
    HELP_1_Desc_4: 'Fai clic su "GENERA PORTAFOGLIO". ',
    HELP_1_Desc_5: 'Il tuo portafoglio è stato appena generato. ',

    HELP_2a_Title: '2a) Come salvo o faccio il backup del mio portafoglio? ',
    HELP_2a_Desc_1:
      'Dovresti sempre fare dei backup esterni in diversi luoghi fisici - come su una penna USB e/o su un pezzo di carta. ',
    HELP_2a_Desc_2:
      "Salva l'indirizzo. Puoi tenerlo per te o condividerlo. In questo modo gli altri possono inviarti degli ether. ",
    HELP_2a_Desc_3:
      'Salva delle versioni della chiave privata. Non condividerla con nessuno. La tua chiave privata è necessaria quando vuoi accedere ai tuoi ether per trasferirli! Ci sono 3 tipi di chiave privata: ',
    HELP_2a_Desc_4:
      'Metti il tuo indirizzo, le versioni della chiave privata, e la versione PDF del tuo portafoglio cartaceo in una cartella. Salvala sul tuo computer e su una penna USB. ',
    HELP_2a_Desc_5:
      "Stampa il portafoglio se hai una stampante. In alternativa, trascrivi la tua chiave privata e l'indirizzo su un pezzo di carta. Conserva questo foglio in un posto sicuro, separato dal tuo computer e dalla penna USB. ",
    HELP_2a_Desc_6:
      'Ricorda, devi evitare la perdita delle chiavi e della password in caso di smarrimento o malfunzionamento del tuo hard disk, penna USB, o pezzo di carta. Devi anche considerare la perdita fisica o il danneggiamento di una intera area (pensa a incendi o inondazioni). ',

    HELP_2b_Title:
      '2b) Come implemento un portafoglio offline in maniera sicura con MyEtherWallet? ',
    HELP_2b_Desc_1:
      'Vai su [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). ',
    HELP_2b_Desc_2: 'Fai clic su `dist-vX.X.X.X.zip`. ',
    HELP_2b_Desc_3: 'Sposta il file zip su un computer *air-gapped*. ',
    HELP_2b_Desc_4: 'Decomprimilo e fai doppio clic su `index.html`. ',
    HELP_2b_Desc_5: 'Genera un portafoglio con una password robusta. ',
    HELP_2b_Desc_6:
      "Salva l'indirizzo. Salva delle versioni della chiave privata. Salva la password se potresti non ricordarla per sempre. ",
    HELP_2b_Desc_7:
      'Conserva questi fogli / penne USB in diversi luoghi fisici separati. ',
    HELP_2b_Desc_8:
      'Vai alla pagina "Informazioni portafoglio" e digita la tua chiave privata / password per assicurarti che siano corrette e per accedere al portafoglio. Controlla che l\'indirizzo che hai trascritto sia lo stesso. ',

    HELP_3_Title: '3) Come verifico di aver accesso al mio nuovo portafoglio? ',
    HELP_3_Desc_1:
      '**Prima di inviare degli ether al tuo nuovo portafoglio**, dovresti assicurarti di poterci accedere. ',
    HELP_3_Desc_2: 'Vai alla pagina "Informazioni portafoglio". ',
    HELP_3_Desc_3:
      'Vai alla pagina "Informazioni portafoglio" su MyEtherWallet.com. ',
    HELP_3_Desc_4:
      'Seleziona il file del tuo portafoglio -oppure- la tua chiave privata e sblocca il portafoglio. ',
    HELP_3_Desc_5:
      'Se il portafoglio è crittografato, comparirà automaticamente una casella di testo. Inserisci la password. ',
    HELP_3_Desc_6: 'Fai clic sul pulsante "Sblocca". ',
    HELP_3_Desc_7:
      "Dovrebbero comparire le informazioni sul tuo portafoglio. Individua l'indirizzo del tuo conto, accanto all'icona rotonda e colorata. Questa icona rappresenta visivamente il tuo indirizzo. Assicurati che l'indirizzo sia quello che hai salvato nel tuo file di testo e che sia presente sul tuo portafoglio cartaceo. ",
    HELP_3_Desc_8:
      'Se stai pensando di conservare una grande quantità di ether, ti consigliamo di provare a inviare una piccola somma di ether dal nuovo portafoglio prima di depositarci un grosso importo. Invia 0,001 ether al nuovo portafoglio, accedici, e invia quegli 0,001 ether a un altro indirizzo, e assicurati che tutto funzioni agevolmente. ',

    HELP_4_Title: '4) Come invio degli ether da un portafoglio a un altro? ',
    HELP_4_Desc_1:
      'Se stai pensando di spostare una grande quantità di ether, dovresti prima provare ad inviare una piccola somma al tuo portafoglio per assicurarti che tutto vada come previsto. ',
    HELP_4_Desc_2: 'Vai alla pagina "Invia ether e token". ',
    HELP_4_Desc_3:
      'Seleziona il file del tuo portafoglio -oppure- la tua chiave privata e sblocca il portafoglio. ',
    HELP_4_Desc_4:
      'Se il portafoglio è crittografato, comparirà automaticamente una casella di testo. Inserisci la password. ',
    HELP_4_Desc_5: 'Fai clic sul pulsante "Sblocca". ',
    HELP_4_Desc_6:
      'Inserisci l\'indirizzo al quale vuoi inviare nel campo "Indirizzo destinatario:". ',
    HELP_4_Desc_7:
      "Inserisci l'importo che vuoi inviare. Puoi anche fare clic sul link \"Invia l'intero saldo\" se desideri trasferire l'intero saldo. ",
    HELP_4_Desc_9: 'Fai clic su "Genera transazione". ',
    HELP_4_Desc_10:
      'Compariranno un paio di ulteriori campi. È perché il tuo browser ha generato la transazione. ',
    HELP_4_Desc_11:
      'Fai clic sul pulsante azzurro "Invia transazione" in basso. ',
    HELP_4_Desc_12:
      'Comparirà un pop-up. Verifica che l\'importo e l\'indirizzo a cui stai inviando siano corretti. Quindi fai clic sul pulsante "Sì, sono sicuro! Esegui la transazione.". ',
    HELP_4_Desc_13:
      "La transazione verrà inviata. Verrà mostrato l'ID della transazione (*TX ID*). Puoi fare clic sul TX ID per vederla sulla *blockchain*. ",

    HELP_4CX_Title: '4) Come invio degli ether utilizzando MyEtherWallet CX? ',
    HELP_4CX_Desc_1:
      'Innanzitutto devi aggiungere un portafoglio. Dopo averlo fatto hai 2 opzioni: la funzionalità "Invio rapido" dall\'icona dell\'estensione di Chrome o la pagina "Invia ether e token". ',
    HELP_4CX_Desc_2: 'Invio rapido: ',
    HELP_4CX_Desc_3: "Fai clic sull'icona dell'estensione di Chrome. ",
    HELP_4CX_Desc_4: 'Fai clic sul pulsante "Invio rapido". ',
    HELP_4CX_Desc_5: 'Seleziona il portafoglio dal quale desideri inviare. ',
    HELP_4CX_Desc_6:
      'Inserisci l\'indirizzo al quale vuoi inviare nel campo "Indirizzo destinatario:". ',
    HELP_4CX_Desc_7:
      "Inserisci l'importo che vuoi inviare. Puoi anche fare clic sul link \"Invia l'intero saldo\" se desideri trasferire l'intero saldo. ",
    HELP_4CX_Desc_8: 'Fai clic su "Invia transazione". ',
    HELP_4CX_Desc_9:
      "Verifica che l'importo e l'indirizzo a cui stai inviando siano corretti. ",
    HELP_4CX_Desc_10: 'Inserisci la password del portafoglio. ',
    HELP_4CX_Desc_11: 'Fai clic su "Invia transazione." ',
    HELP_4CX_Desc_12: 'Tramite la pagina "Invia ether e token" ',

    HELP_5_Title:
      '5) Come faccio ad eseguire MyEtherWallet.com offline/in locale? ',
    HELP_5_Desc_1:
      'Puoi eseguire MyEtherWallet.com sul tuo computer invece che dai server di GitHub. Puoi generare un portafoglio completamente offline e inviare transazioni dalla pagina "Invia Offline". ',
    HELP_5_Desc_7:
      'MyEtherWallet.com è ora in esecuzione completamente sul tuo computer. ',
    HELP_5_Desc_8:
      "In caso tu non abbia molta confidenza, ti serve l'intera cartella per poter eseguire il sito web, non solo `index.html`. Non toccare né spostare nulla del contenuto della cartella. Se stai conservando un backup del repository MyEtherWallet per il futuro, ti consigliamo di conservare soltanto il file ZIP in modo da assicurarti che i contenuti della cartella rimangano intatti. ",
    HELP_5_Desc_9:
      'Dal momento che stiamo costantemente aggiornando MyEtherWallet.com, ti consigliamo di aggiornare periodicamente la tua versione locale del repository. ',

    HELP_5CX_Title:
      '5) Come posso installare questa estensione dal repository invece che dal Chrome Store? ',
    HELP_5CX_Desc_2:
      'Fai clic su `chrome-extension-vX.X.X.X.zip` e decomprimi il file. ',
    HELP_5CX_Desc_3:
      'In Google Chrome, fai clic su Impostazioni (dal menu in alto a destra). ',
    HELP_5CX_Desc_4: 'Fai clic su "Estensioni" sulla sinistra. ',
    HELP_5CX_Desc_5:
      'Seleziona la casella "Modalità sviluppatore" all\'inizio della pagina. ',
    HELP_5CX_Desc_6:
      'Fai clic sul pulsante "Carica estensione non pacchettizzata...". ',
    HELP_5CX_Desc_7:
      'Vai alla cartella che hai precedentemente scaricato e decompresso. Fai clic su "Seleziona". ',
    HELP_5CX_Desc_8:
      "L'estensione dovrebbe ora comparire fra le tue estensioni e nella barra delle estensioni di Chrome. ",

    HELP_7_Title: '7) Come invio token e come aggiungo token personalizzati? ',
    HELP_7_Desc_0:
      '[Ethplorer.io](https://ethplorer.io/) è un ottimo modo di esplorare i token e trovarne i decimali. ',
    HELP_7_Desc_1: 'Vai alla pagina "Invia ether e token". ',
    HELP_7_Desc_2: 'Sblocca il portafoglio. ',
    HELP_7_Desc_3:
      'Inserisci l\'indirizzo al quale vuoi inviare nel campo "Indirizzo destinatario:". ',
    HELP_7_Desc_4: "Inserisci l'importo che vuoi inviare. ",
    HELP_7_Desc_5: 'Seleziona il token che vuoi inviare. ',
    HELP_7_Desc_6: "Se non vedi il token nell'elenco: ",
    HELP_7_Desc_7: 'Fai clic su "Altro". ',
    HELP_7_Desc_8:
      "Inserisci l'indirizzo, il nome, e i decimali del token. Questi valori sono forniti dagli sviluppatori del token e sono necessari anche quando aggiungi il token in Mist per osservarlo. ",
    HELP_7_Desc_9: 'Fai clic su "Salva". ',
    HELP_7_Desc_10:
      'Ora puoi inviare il token e anche vederne il saldo nella barra laterale. ',
    HELP_7_Desc_11: 'Fai clic su "Genera transazione". ',
    HELP_7_Desc_12:
      'Compariranno un paio di ulteriori campi. È perché il tuo browser ha generato la transazione. ',
    HELP_7_Desc_13:
      'Fai clic sul pulsante azzurro "Invia transazione" in basso. ',
    HELP_7_Desc_14:
      'Comparirà un pop-up. Verifica che l\'importo e l\'indirizzo a cui stai inviando siano corretti. Quindi fai clic sul pulsante "Sì, sono sicuro! Esegui la transazione.". ',
    HELP_7_Desc_15:
      "La transazione verrà inviata. Verrà mostrato l'ID della transazione (*TX ID*). Puoi fare clic sul TX ID per vederla sulla *blockchain*. ",

    HELP_8_Title: '8) Che succede se il vostro sito va giù? ',
    HELP_8_Desc_1:
      "MyEtherWallet non è un portafoglio web. Non hai un login e niente viene mai salvato nei nostri server. È semplicemente un'interfaccia che ti consente di interagire con la *blockchain*. ",
    HELP_8_Desc_2:
      'Se MyEtherWallet.com va giù, dovrai trovare un altro modo (come geth o Ethereum Wallet / Mist) per fare quello che facciamo noi. Ma non dovrai "tirare fuori" i tuoi ether da MyEtherWallet perché non si trovano in MyEtherWallet. Sono in qualunque portafoglio tu abbia generato tramite il nostro sito. ',
    HELP_8_Desc_3:
      'Ora puoi importare direttamente e molto facilmente in geth / Ethereum Wallet / Mist la tua chiave privata non crittografata e i tuoi file in formato Geth/Mist (crittografati). Vedi la domanda n. 12 qui sotto. ',
    HELP_8_Desc_4:
      'Inoltre, la probabilità che tiriamo giù MyEtherWallet è prossima allo zero. Non ci costa praticamente nulla mantenerlo dal momento che non stiamo memorizzando alcuna informazione. Se anche disattivassimo il dominio, è ancora, e sarà sempre, disponibile pubblicamente su [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Puoi scaricare lo ZIP da lì ed eseguirlo in locale. ',

    HELP_8CX_Title: '8) Che succede se MyEtherWallet CX sparisce? ',
    HELP_8CX_Desc_1:
      "Innanzitutto, tutti i dati sono salvati sul tuo computer, non sui nostri server. So che può essere disorientante, ma quando utilizzi l'estensione Chrome NON stai guardando qualcosa che è salvato da qualche parte sui nostri server - è tutto salvato sul tuo computer. ",
    HELP_8CX_Desc_2:
      'Detto ciò, è **molto importante** che tu faccia un backup di tutte le informazioni relative a ogni nuovo portafoglio generato con MyEtherWallet CX. In questo modo se succede qualcosa a MyEtherWallet CX or al tuo computer avrai ancora tutte le informazioni necessarie ad accedere ai tuoi ether. Vedi la domanda n. 2a per come salvare i tuoi portafogli. ',
    HELP_8CX_Desc_3:
      "Se per qualche ragione MyEtherWallet CX sparisce dal Chrome Store, puoi trovare i sorgenti su Github e caricare l'estensione manualmente. Vedi la domanda n. 5 qui sopra. ",

    HELP_9_Title: '9) La pagina "Invia ether e token" è offline? ',
    HELP_9_Desc_1:
      'No. Ha bisogno di Internet per poter ottenere il prezzo corrente del gas, il *nonce* del tuo conto, e per trasmettere la transazione (cioè per inviarla). Tuttavia, si limita ad inviare la transazione firmata. La tua chiave privata rimane al sicuro con te. Ora abbiamo inserito anche una pagina "Invia offline" così che ti possa assicurare che le tue chiavi private rimangano sempre su un computer offline/*air-gapped*. ',

    HELP_10_Title: '10) Come creo una transazione offline? ',
    HELP_10_Desc_1:
      'Vai alla pagina "Invia offline" con il tuo computer online. ',
    HELP_10_Desc_2:
      "Inserisci l'\"Indirizzo mittente\". Ti preghiamo di notare che questo è l'indirizzo MITTENTE, non l'indirizzo DESTINATARIO. Da questo indirizzo si genera il *nonce* e il prezzo del gas. ",
    HELP_10_Desc_3:
      'Spostati sul tuo computer offline. Inserisci l\'"INDIRIZZO DESTINATARIO" e l\'"IMPORTO" che desideri inviare. ',
    HELP_10_Desc_4:
      'Inserisci il "PREZZO GAS" così come visualizzato sul tuo computer online nel passo n. 1. ',
    HELP_10_Desc_5:
      'Inserisci il "NONCE" così come visualizzato sul tuo computer online nel passo n. 1. ',
    HELP_10_Desc_6:
      'Il "LIMITE GAS" ha un valore predefinito di 21000. Questo valore è sufficiente per una transazione standard. Se desideri inviare ad un contratto o se includi nella transazione dati aggiuntivi avrai bisogno di aumentare il limite gas. Eventuale gas in eccesso ti sarà restituito. ',
    HELP_10_Desc_7:
      'Se lo desideri, inserisci dei dati. Se lo fai, dovrai aumentare il limite gas a un valore superiore al limite predefinito di 21000. Tutti i dati sono in formato HEX. ',
    HELP_10_Desc_8:
      'Seleziona il file del tuo portafoglio -oppure- la tua chiave privata e sblocca il portafoglio. ',
    HELP_10_Desc_9: 'Premi il pulsante "GENERA TRANSAZIONE". ',
    HELP_10_Desc_10:
      'I campi sotto il pulsante saranno riempiti con la transazione firmata. Copiala e ritorna al tuo computer online. ',
    HELP_10_Desc_11:
      'Sul tuo computer online, incolla la transazione firmata nel campo di testo nel passo n. 3 e fai clic su "Invia transazione". In questo modo la transazione verrà trasmessa. ',

    HELP_12_Title:
      '12) Come faccio a importare un portafoglio creato con MyEtherWallet in geth / Ethereum Wallet / Mist? ',
    HELP_12_Desc_1:
      'Con un file JSON Geth/Mist generato da MyEtherWallet v2+.... ',
    HELP_12_Desc_2: 'Vai alla pagina "Informazioni portafoglio". ',
    HELP_12_Desc_3:
      'Sblocca il portafoglio usando la tua chiave privata **crittografata** o il file JSON. ',
    HELP_12_Desc_4: 'Vai alla pagina "I miei portafogli". ',
    HELP_12_Desc_5:
      'Seleziona il portafoglio che vuoi importare in Mist, fai clic sull\'icona "Mostra", inserisci la password, e accedi al portafoglio. ',
    HELP_12_Desc_6:
      'Individua la sezione "File Keystore/JSON (Consigliato · Crittografato · Formato Mist/Geth)". Premi il pulsante "Download" al di sotto. Ora hai il file keystore. ',
    HELP_12_Desc_7: "Apri l'applicazione Ethereum Wallet. ",
    HELP_12_Desc_8:
      'Nella barra dei menu, vai su "Accounts" -> "Backup" -> "Accounts" ',
    HELP_12_Desc_9:
      'Si aprirà la tua cartella keystore. Copia il file che hai appena scaricato (`UTC--2016-04-14........`) dentro questa cartella. ',
    HELP_12_Desc_10:
      'Il tuo conto dovrebbe comparire immediatamente sotto "Accounts." ',
    HELP_12_Desc_11: 'Con una chiave privata non crittografata... ',
    HELP_12_Desc_12:
      'Se non hai già la chiave private non crittografata, vai alla pagina "Informazioni portafoglio". ',
    HELP_12_Desc_13:
      'Seleziona il file del tuo portafoglio -oppure- inserisci/incolla la tua chiave privata per sbloccare il portafoglio. ',
    HELP_12_Desc_14: 'Copia la tua chiave privata (non crittografata). ',
    HELP_12_Desc_15: 'Se sei su un Mac: ',
    HELP_12_Desc_15b: 'Se sei su un PC: ',
    HELP_12_Desc_16: 'Apri TextEdit e incolla la chiave privata. ',
    HELP_12_Desc_17:
      'Vai sulla barra dei menu e fai clic su "Formato" -> "Converti in formato Solo testo". ',
    HELP_12_Desc_18:
      'Salva questo file sulla tua `Scrivania` come `niente_di_speciale_cancellami.txt`. Assicurati che siano selezionati "UTF-8" e "Se non è indicata nessuna estensione, usa .”txt”" nella finestra di salvataggio. ',
    HELP_12_Desc_19:
      'Apri il terminale ed esegui il seguente comando: `geth account import ~/Desktop/niente_di_speciale_cancellami.txt` ',
    HELP_12_Desc_20:
      'Ti verrà chiesto di creare una nuova password. È la password che userai in geth / Ethereum Wallet / Mist ogni volta che invierai una transazione, quindi non dimenticarla. ',
    HELP_12_Desc_21:
      'A importazione conclusa positivamente, cancella `niente_di_speciale_cancellami.txt` ',
    HELP_12_Desc_22:
      'Alla prossima apertura dell\'applicazione Ethereum Wallet, il tuo conto sarà mostrato sotto "Accounts". ',
    HELP_12_Desc_23: 'Apri Blocco note e incolla la chiave privata ',
    HELP_12_Desc_24:
      'Salva il file come `niente_di_speciale_cancellami.txt` in `C:\\` ',
    HELP_12_Desc_25:
      'Esegui il comando `geth account import C:\\niente_di_speciale_cancellami.txt` ',
    HELP_12_Desc_26:
      'Ti verrà chiesto di creare una nuova password. È la password che userai in geth / Ethereum Wallet / Mist ogni volta che invierai una transazione, quindi non dimenticarla. ',
    HELP_12_Desc_27:
      'A importazione conclusa positivamente, cancella `niente_di_speciale_cancellami.txt` ',
    HELP_12_Desc_28:
      'Alla prossima apertura dell\'applicazione Ethereum Wallet, il tuo conto sarà mostrato sotto "Accounts". ',

    HELP_13_Title:
      '13) Cosa significa "Fondi insufficienti. L\'account dal quale stai provando ad inviare la transazione non ha abbastanza fondi. Richiesti XXXXXXXXXXXXXXXXXXX ma presenti: XXXXXXXXXXXXXXXX."? ',
    HELP_13_Desc_1:
      "Significa che non hai abbastanza ether nel tuo conto per coprire il costo del gas. Tutte le transazioni (comprese quelle che riguardano token e contratti) richiedono gas, e il gas si paga in ether. Il numero indicato è l'importo richiesto per coprire il costo della transazione in wei. Prendi quel numero, dividilo per `1000000000000000000`, e sottrai la quantità di ether che stavi provando ad inviare (se stavi provando ad inviare ether). Il risultato è la somma in ether che devi inviare a quel conto per poter eseguire la transazione. ",

    HELP_14_Title:
      '14) Certi siti inizializzano il generatore di numeri casuali per la generazione della chiave privata tramite i movimenti del mouse. MyEtherWallet.com non lo fa. La generazione di numeri casuali di MyEtherWallet è sicura? ',
    HELP_14_Desc_1:
      "Sebbene usare i movimenti del mouse sia ingegnoso, e comprendiamo perché piaccia, la realtà è che window.crypto assicura maggiore entropia rispetto ai tuoi movimenti del mouse. Non che i movimenti del mouse siano insicuri, è solo che noi (e un sacco di altri critto-esperimenti) crediamo in window.crypto. Oltretutto, MyEtherWallet.com può essere utilizzato su dispositivi touch. Qui c'è una [conversazione fra un utente di reddit arrabbiato e Vitalik Buterin su movimenti del mouse contro window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) e qui c'è [la specifica del w3 di window.crypto](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). ",

    HELP_15_Title:
      '15) Perché il conto che ho appena creato non risulta nello strumento per esplorare la *blockchain*? (es: etherchain, etherscan) ',
    HELP_15_Desc_1:
      "I conti vengono mostrati in quegli strumenti solamente dopo che c'è stata un'attività sul conto in questione&mdash;ad esempio, dopo che ci hai trasferito degli ether. ",

    HELP_16_Title: '16) Come faccio a controllare il saldo del mio conto? ',
    HELP_16_Desc_1:
      "Puoi usare uno strumento per l'esplorazione della *blockchain* come [etherscan.io](http://etherscan.io/). Incolla il tuo indirizzo nella barra di ricerca e vedrai il tuo indirizzo e lo storico delle transazioni. Ad esempio, questo è come si presenta il nostro [conto donazioni](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) su etherscan.io ",

    HELP_17_Title:
      '17) Perché non viene mostrato il saldo quando sblocco il mio portafoglio? ',
    HELP_17_Desc_1:
      'Probabilmente perché sei dietro a un firewall. Le API che utilizziamo per ottenere il saldo e convertirlo sono spesso bloccate dai firewall per qualche ragione. Sarai ancora in grado di inviare transazioni, dovrai solo usare un metodo diverso per vedere il tuo saldo, come etherscan.io ',

    HELP_18_Title: "18) Dov'è il mio file portafoglio di geth? ",

    HELP_19_Title: "19) Dov'è il mio file portafoglio di Mist? ",
    HELP_19_Desc_1:
      'I file di Mist si trovano di solito nelle posizioni qui sopra, ma è molto più facile aprire Mist, selezionare "Accounts" nella barra dei menu, selezionare "Backup", e selezionare "Accounts". Si aprirà la cartella in cui sono memorizzati i tuoi file. ',

    HELP_20_Title: "20) Dov'è il mio file portafoglio della prevendita? ",
    HELP_20_Desc_1:
      'Dove l\'hai salvato. ;) Ti è anche stato spedito in mail, quindi controllala. Cerca un file chiamato `"ethereum_wallet_backup.json"` e selezionalo. Questo portafoglio sarà crittografato con la password che hai creato durante l\'acquisto della prevendita. ',

    HELP_21_Title:
      '21) Non basta inserire chiavi private casuali, cercare un saldo, e poi inviarselo al proprio indirizzo? ',
    HELP_21_Desc_1:
      "Versione corta: sì, ma trovare un conto con un saldo richiederebbe più tempo dell'età dell'universo... quindi no. ",
    HELP_21_Desc_2:
      "Versione lunga in termini semplici: Ethereum si basa sulla [Crittografia a chiave pubblica](https://it.wikipedia.org/wiki/Crittografia_a_chiave_pubblica), nello specifico [Crittografia a curva ellittica](https://eprint.iacr.org/2013/734.pdf) (ECC) che è ampiamente utilizzata, non solo in Ethereum. La maggior parte dei server sono protetti tramite ECC. Anche Bitcoin la usa, oltre a SSH e TLS e a un sacco di altra roba. Le chiavi di Ethereum nello specifico sono di 256 bit, che sono più robuste di 128 bit e 192 bit, che sono anch'esse ampiamente utilizzate e sono tuttora considerate sicure dagli esperti. ",
    HELP_21_Desc_3:
      "In tutto ciò tu hai una chiave privata e una chiave pubblica. Dalla chiave privata si può derivare la chiave pubblica, ma dalla chiave pubblica non si può risalire alla chiave privata. Il fatto che Internet e i segreti del mondo usino questa crittografia significa che se ci fosse un modo per ottenere una chiave privata da una chiave pubblica, i tuoi ether persi sarebbero l'ultimo dei problemi. ",
    HELP_21_Desc_4:
      "Ora, detto ciò, SÌ se qualcun altro ha la tua chiave privata allora può effettivamente inviare ether dal tuo conto. Proprio come se qualcuno ha la password della tua mail può leggere e spedire la tua mail, o se ha la password del tuo conto bancario potrebbe fare dei trasferimenti. Potresti scaricare la versione Keystore della tua chiave privata che è la chiave privata crittografata con una password. È come avere una password che è a sua volta protetta da un'altra password. ",
    HELP_21_Desc_5:
      'E SÌ, in teoria potresti semplicemente digitare stringhe di 64 caratteri esadecimali fino a trovarne una che corrisponda. Infatti, persone intelligenti potrebbero scrivere un programma per controllare molto rapidamente chiavi private casuali. Questo procedimento è conosciuto come *"attacco a forza bruta"* o *"mining"* delle chiavi private. Ci hanno pensato molto e a lungo. Con qualche server di altissimo livello potrebbero essere in grado di controllare più di 1 milione di chiavi al secondo. Però nemmeno controllarne così tante al secondo porterebbe all\'accesso in una maniera tale da rendere il costo dell\'utilizzo di quei server vagamente vicino all\'essere proficuo - è più probabile che tu, e i tuoi pronipoti, moriate prima di trovare una corrispondenza. ',
    HELP_21_Desc_6:
      'Se sai qualcosa di Bitcoin, [questo ti darà un\'idea:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *"Per illustrare quanto ciò sia improbabile: supponi che ogni satoshi di ogni bitcoin che sarà mai generato sia inviato a una sua chiave privata unica. La probabilità che fra queste chiavi ce ne possano essere due che corrispondano allo stesso indirizzo è circa di uno in 100 trilioni"*. ',
    HELP_21_Desc_7:
      '[Se preferisci qualcosa di un po\' più tecnico:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *"Questi numeri non hanno niente a che fare con la tecnologia dei dispositivi; sono i massimi che la termodinamica consente. E implicano fortemente che gli attacchi a forza bruta contro le chiavi a 256 bit saranno impraticabili almeno fino a quando i computer non saranno costruiti con qualcosa di diverso dalla materia e non occuperanno qualcosa di diverso dallo spazio."* ',
    HELP_21_Desc_8:
      "Certo, tutto ciò assume che le chiavi siano generate in una maniera veramente casuale e con sufficiente entropia. Le chiavi generate qui soddisfano questi criteri, come anche Jaxx e Mist/geth. I portafogli Ethereum sono tutti piuttosto buoni. Le chiavi generate dai *brainwallet* non lo sono, dal momento che il cervello di una persona non è capace di creare un seme veramente casuale. Ci sono stati un numero di altri problemi relativi alla mancanza di entropia o a semi non generati in maniera veramente casuale nel mondo di Bitcoin, ma quella è un'altra questione di cui non parleremo oggi. ",

    HELP_SecCX_Title: 'Sicurezza - MyEtherWallet CX ',
    HELP_SecCX_Desc_1:
      "Dov'è che questa estensione salva le mie informazioni? ",
    HELP_SecCX_Desc_2:
      'Le informazioni che memorizzi in questa estensione di Chrome sono salvate tramite [chrome.storage](http://chrome.storage/). - è lo stesso posto in cui vengono salvate le tue password quando le salvi in Chrome. ',
    HELP_SecCX_Desc_3: 'Che informazioni sono salvate? ',
    HELP_SecCX_Desc_4:
      "L'indirizzo, nome, e la chiave privata sono memorizzati in chrome.storage. La chiave privata è crittografata utilizzando la password che hai impostato quando hai aggiunto il portafoglio. Il nome e l'indirizzo del portafoglio non sono crittografati. ",
    HELP_SecCX_Desc_5:
      "Perché il nome e l'indirizzo del portafoglio non sono crittografati? ",
    HELP_SecCX_Desc_6:
      'Se crittografassimo questi elementi dovresti inserire una password ogni volta in cui volessi vedere il saldo del tuo conto o i nomi dei portafogli. Se ciò ti preoccupa, ti consigliamo di usare MyEtherWallet.com invece di questa estensione di Chrome. ',

    HELP_Sec_Title: 'Sicurezza ',
    HELP_Sec_Desc_1:
      'Se una delle prime domande che ti poni è "Perché dovrei fidarmi di questa gente?", è una cosa buona. Quanto segue dovrebbe aiutarti a calmare i tuoi timori. ',
    HELP_Sec_Desc_2:
      'Siamo attivi da agosto 2015. Se cerchi ["myetherwallet" su reddit](https://www.reddit.com/search?q=myetherwallet), puoi vedere che molte persone ci utilizzano con grande successo. ',
    HELP_Sec_Desc_3:
      'Non prenderemo i tuoi soldi né ruberemo le tue chiavi private. Non c\'è codice malevolo su questo sito. Infatti le pagine "Genera portafoglio" sono completamente lato client. Ciò significa che tutto il codice è eseguito sul ** tuo computer** e non viene mai salvato e trasmesso da nessuna parte. ',
    HELP_Sec_Desc_4:
      "Controlla l'URL -- Questo sito viene servito attraverso GitHub e puoi vederne il codice sorgente qui: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) su [https://www.myetherwallet.com](https://www.myetherwallet.com). ",
    HELP_Sec_Desc_5:
      'Per la generazione dei portafogli, puoi scaricare il [codice sorgente](https://github.com/kvhnuke/etherwallet/releases/latest) ed eseguirlo in locale. Vedi la domanda 5 qui sopra. ',
    HELP_Sec_Desc_6:
      'Genera un portafoglio di prova e controlla che attività di rete sono in corso. Il modo più facile e fare clic destro sulla pagina e scegliere "Analizza elemento". Vai sulla scheda "Rete". Genera un portafoglio di prova. Vedrai che non c\'è attività di rete. Potresti vedere accadere qualcosa che assomiglia a  data:image/gif e data:image/png. Sono i QR code che vengono generati...sul tuo computer...dal tuo computer. Non sono stati trasferiti byte. ',
    HELP_Sec_Desc_8:
      'Se non ti senti a tuo agio a usare questo strumento, allora certo, non usarlo. Abbiamo creato questo strumento per aiutare la gente a generare portafogli ed eseguire transazioni senza bisogno di usare la riga di comando o far girare un nodo completo. Di nuovo, sentiti libero di contattarci se hai dubbi e ti risponderemo appena possibile. Grazie! ',

    HELP_FAQ_Title: 'Risposte più utili alle domande frequenti (in Inglese) ',
    HELP_Contact_Title: 'Modi per contattarci (in Inglese)'
  }
};
