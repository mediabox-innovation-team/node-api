const Validation = require("../class/Validation")
const Profils = require("../models/Profils")
const Utilisateurs = require("../models/Utilisateurs")

const getUtilisateurs = async (req, res) => {
     try {
          const utilisateurs = await Utilisateurs.findAll({
               include: {
                    model: Profils,
                    as: 'profil'
               }
          })
          res.status(200).json(utilisateurs)
     } catch (error) {
          console.log(error)
          res.status(500).send("Erreur interne du serveur")
     }
}

const findByid = async (req, res) => {
     try {
          const { ID_UTILISATEUR } = req.params
          const utilisateur = await Utilisateurs.findOne({
               where: {
                    ID_UTILISATEUR: ID_UTILISATEUR
               }
          })
          res.status(200).json(utilisateur)
     } catch (error) {
          console.log(error)
          res.status(500).send("Erreur interne du serveur")
     }
}

const creerUtilisateur = async (req, res) => {
     try {
          const { NOM, PRENOM, ID_PROFIL } = req.body
          const validation = new Validation(req.body, {
               NOM: {
                    required: true,
                    alpha: true,
                    length: [2, 20]
               },
               PRENOM: {
                    required: true,
                    alpha: true,
                    length: [2, 20]
               },
               ID_PROFIL: {
                    required: true,
                    number: true,
                    exists: "profils,ID_PROFIL"
               }
          }, {
               NOM: {
                    required: "Ce champ est obligatoire",
                    alpha: "Le nom doit contenir des caractères alphanumériques",
                    length: "Le nom doit comporter entre 2 et 20 caractères"
               },
               PRENOM: {
                    required: "Ce champ est obligatoire",
                    alpha: "Le prénom doit contenir des caractères alphanumériques",
                    length: "Le prénom doit comporter entre 2 et 20 caractères"
               },
               ID_PROFIL: {
                    required: "Le profil est obligatoire",
                    number: "Ce champ doit contenir un nombre valide",
                    exists: "Le profil n'existe pas"
               }
          })
          await validation.run()
          const isValid = await validation.isValidate()
          if(!isValid) {
               const errors = await validation.getErrors()
               return res.status(422).json({
                    message: "La validation des données a echouée",
                    data: errors
               })
          }
          const nouveauUtilisateur = await Utilisateurs.create({
               NOM: NOM,
               PRENOM: PRENOM,
               ID_PROFIL: ID_PROFIL
          })
          res.status(200).json({
               message: "Nouvel utilisateur créé avec succès",
               data: nouveauUtilisateur
          })
     } catch (error) {
          console.log(error)
          res.status(500).send("Erreur interne du serveur")
     }
}

const modifierUtilisateur = async (req, res) => {
     try {
          const { ID_UTILISATEUR } = req.params
          const { NOM, PRENOM } = req.body
          await Utilisateurs.update({
               NOM: NOM,
               PRENOM: PRENOM
          }, {
               where: {
                    ID_UTILISATEUR: ID_UTILISATEUR
               }
          })
          res.status(200).json({
               message: "Utilisateur modifié avec succès",
               data: {
                    ID_UTILISATEUR,
                    NOM,
                    PRENOM
               }
          })
     } catch (error) {
          console.log(error)
          res.status(500).send("Erreur interne du serveur")
     }
}

const supprimerUtilisateur = async (req, res) => {
     try {
          const { ID_UTILISATEUR } = req.params
          await Utilisateurs.destroy({
               where: {
                    ID_UTILISATEUR: ID_UTILISATEUR
               }
          })
          res.status(200).json({
               message: "L'utilisateur a été supprimé avec succès"
          })
     } catch (error) {
          console.log(error)
          res.status(500).send("Erreur interne du serveur")
     }
}

module.exports = {
     getUtilisateurs,
     creerUtilisateur,
     modifierUtilisateur,
     supprimerUtilisateur,
     findByid
}