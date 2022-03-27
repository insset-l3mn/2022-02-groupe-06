/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package beans;

import java.io.Serializable;
import java.util.Collection;
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
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author Omar
 */
@Entity
@Table(name = "competence")
@NamedQueries({
    @NamedQuery(name = "Competence.findAll", query = "SELECT c FROM Competence c"),
    @NamedQuery(name = "Competence.findById", query = "SELECT c FROM Competence c WHERE c.id = :id"),
    @NamedQuery(name = "Competence.findByNomcompetence", query = "SELECT c FROM Competence c WHERE c.nomcompetence = :nomcompetence")})
public class Competence implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "nomcompetence")
    private String nomcompetence;
    @JoinColumn(name = "id_sousdomaine", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private Sousdomaine idSousdomaine;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idCompetence")
    private Collection<Question> questionCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idCompetence")
    private Collection<Formation> formationCollection;

    public Competence() {
    }

    public Competence(Integer id) {
        this.id = id;
    }

    public Competence(Integer id, String nomcompetence) {
        this.id = id;
        this.nomcompetence = nomcompetence;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNomcompetence() {
        return nomcompetence;
    }

    public void setNomcompetence(String nomcompetence) {
        this.nomcompetence = nomcompetence;
    }

    @JsonbTransient
    public Sousdomaine getIdSousdomaine() {
        return idSousdomaine;
    }

    public void setIdSousdomaine(Sousdomaine idSousdomaine) {
        this.idSousdomaine = idSousdomaine;
    }

    @JsonbTransient
    public Collection<Question> getQuestionCollection() {
        return questionCollection;
    }

    public void setQuestionCollection(Collection<Question> questionCollection) {
        this.questionCollection = questionCollection;
    }

    @JsonbTransient
    public Collection<Formation> getFormationCollection() {
        return formationCollection;
    }

    public void setFormationCollection(Collection<Formation> formationCollection) {
        this.formationCollection = formationCollection;
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
        if (!(object instanceof Competence)) {
            return false;
        }
        Competence other = (Competence) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "beans.Competence[ id=" + id + " ]";
    }

}
