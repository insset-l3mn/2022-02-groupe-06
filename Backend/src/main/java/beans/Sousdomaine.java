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
@Table(name = "sousdomaine")
@NamedQueries({
    @NamedQuery(name = "Sousdomaine.findAll", query = "SELECT s FROM Sousdomaine s"),
    @NamedQuery(name = "Sousdomaine.findById", query = "SELECT s FROM Sousdomaine s WHERE s.id = :id"),
    @NamedQuery(name = "Sousdomaine.findByNomsousdomaine", query = "SELECT s FROM Sousdomaine s WHERE s.nomsousdomaine = :nomsousdomaine"),
    @NamedQuery(name = "Sousdomaine.findByLabel", query = "SELECT s FROM Sousdomaine s WHERE s.label = :label")})
public class Sousdomaine implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 500)
    @Column(name = "nomsousdomaine")
    private String nomsousdomaine;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 500)
    @Column(name = "label")
    private String label;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idSousdomaine")
    private Collection<Competence> competenceCollection;
    @JoinColumn(name = "id_domaine", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private Domaine idDomaine;

    public Sousdomaine() {
    }

    public Sousdomaine(Integer id) {
        this.id = id;
    }

    public Sousdomaine(Integer id, String nomsousdomaine, String label) {
        this.id = id;
        this.nomsousdomaine = nomsousdomaine;
        this.label = label;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNomsousdomaine() {
        return nomsousdomaine;
    }

    public void setNomsousdomaine(String nomsousdomaine) {
        this.nomsousdomaine = nomsousdomaine;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    @JsonbTransient
    public Collection<Competence> getCompetenceCollection() {
        return competenceCollection;
    }

    public void setCompetenceCollection(Collection<Competence> competenceCollection) {
        this.competenceCollection = competenceCollection;
    }

    @JsonbTransient
    public Domaine getIdDomaine() {
        return idDomaine;
    }

    public void setIdDomaine(Domaine idDomaine) {
        this.idDomaine = idDomaine;
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
        if (!(object instanceof Sousdomaine)) {
            return false;
        }
        Sousdomaine other = (Sousdomaine) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "beans.Sousdomaine[ id=" + id + " ]";
    }

}