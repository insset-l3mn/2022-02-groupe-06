/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package beans;

import java.io.Serializable;
import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author sohaib
 */
@Entity
@Table(name = "chapitre")
@NamedQueries({
    @NamedQuery(name = "Chapitre.findAll", query = "SELECT c FROM Chapitre c"),
    @NamedQuery(name = "Chapitre.findById", query = "SELECT c FROM Chapitre c WHERE c.id = :id"),
    @NamedQuery(name = "Chapitre.findByLabel", query = "SELECT c FROM Chapitre c WHERE c.label = :label"),
    @NamedQuery(name = "Chapitre.findByDescription", query = "SELECT c FROM Chapitre c WHERE c.description = :description"),
    @NamedQuery(name = "Chapitre.findByContent", query = "SELECT c FROM Chapitre c WHERE c.content = :content")})
public class Chapitre implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 500)
    @Column(name = "label")
    private String label;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 500)
    @Column(name = "description")
    private String description;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 500)
    @Column(name = "content")
    private String content;
    @JoinColumns({
        @JoinColumn(name = "id_formation", referencedColumnName = "id"),
        @JoinColumn(name = "id_formation", referencedColumnName = "id")})
    @ManyToOne(optional = false)
    private Formation formation;

    public Chapitre() {
    }

    public Chapitre(Integer id) {
        this.id = id;
    }

    public Chapitre(Integer id, String label, String description, String content) {
        this.id = id;
        this.label = label;
        this.description = description;
        this.content = content;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @JsonbTransient
    public Formation getFormation() {
        return formation;
    }

    public void setFormation(Formation formation) {
        this.formation = formation;
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
        if (!(object instanceof Chapitre)) {
            return false;
        }
        Chapitre other = (Chapitre) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "beans.Chapitre[ id=" + id + " ]";
    }

}
