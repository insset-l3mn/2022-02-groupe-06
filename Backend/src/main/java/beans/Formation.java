/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package beans;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author Omar
 */
@Entity
@Table(name = "formation")
@NamedQueries({
    @NamedQuery(name = "Formation.findAll", query = "SELECT f FROM Formation f"),
    @NamedQuery(name = "Formation.findById", query = "SELECT f FROM Formation f WHERE f.id = :id"),
    @NamedQuery(name = "Formation.findByNomFormation", query = "SELECT f FROM Formation f WHERE f.nomFormation = :nomFormation"),
    @NamedQuery(name = "Formation.findByCreatedAt", query = "SELECT f FROM Formation f WHERE f.createdAt = :createdAt"),
    @NamedQuery(name = "Formation.findByUpdatedAt", query = "SELECT f FROM Formation f WHERE f.updatedAt = :updatedAt")})
public class Formation implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "nomFormation")
    private String nomFormation;
    @Basic(optional = false)
    @NotNull
    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;
    @Basic(optional = false)
    @NotNull
    @Column(name = "updated_at")
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedAt;
    @JoinColumn(name = "id_competence", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private Competence idCompetence;
    @JoinColumn(name = "id_formateur", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private User idFormateur;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "formation")
    private Collection<Chapitre> chapitreCollection;

    public Formation() {
    }

    public Formation(Integer id) {
        this.id = id;
    }

    public Formation(Integer id, String nomFormation, Date createdAt, Date updatedAt) {
        this.id = id;
        this.nomFormation = nomFormation;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNomFormation() {
        return nomFormation;
    }

    public void setNomFormation(String nomFormation) {
        this.nomFormation = nomFormation;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    @JsonbTransient
    public Competence getIdCompetence() {
        return idCompetence;
    }

    public void setIdCompetence(Competence idCompetence) {
        this.idCompetence = idCompetence;
    }

    @JsonbTransient
    public User getIdFormateur() {
        return idFormateur;
    }

    public void setIdFormateur(User idFormateur) {
        this.idFormateur = idFormateur;
    }

    @JsonbTransient
    public Collection<Chapitre> getChapitreCollection() {
        return chapitreCollection;
    }

    public void setChapitreCollection(Collection<Chapitre> chapitreCollection) {
        this.chapitreCollection = chapitreCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Formation)) {
            return false;
        }
        Formation other = (Formation) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "beans.Formation[ id=" + id + " ]";
    }

}
