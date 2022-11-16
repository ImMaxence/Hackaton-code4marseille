<?php

namespace App\Entity;

use App\Repository\EpreuveRepository;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: EpreuveRepository::class)]
class Epreuve
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['api_athlete_browse', 'api_athlete_browseByLike'])]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Groups(['api_athlete_browse', 'api_athlete_browseByLike'])]
    private ?\DateTimeInterface $date = null;

    #[ORM\Column(length: 255)]
    #[Groups(['api_athlete_browse', 'api_athlete_browseByLike'])]
    private ?string $location = null;

    #[ORM\ManyToOne(inversedBy: 'epreuves')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Sport $codeSport = null;

    #[ORM\ManyToMany(targetEntity: Athlete::class, mappedBy: 'epreuves')]
    private Collection $athletes;

    #[ORM\Column(length: 255)]
    #[Groups(['api_athlete_browse', 'api_athlete_browseByLike'])]
    private ?string $name = null;

    public function __construct()
    {
        $this->athletes = new ArrayCollection();
        $this->date = new DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(string $location): self
    {
        $this->location = $location;

        return $this;
    }

    public function getCodeSport(): ?Sport
    {
        return $this->codeSport;
    }

    public function setCodeSport(?Sport $codeSport): self
    {
        $this->codeSport = $codeSport;

        return $this;
    }

    /**
     * @return Collection<int, Athlete>
     */
    public function getAthletes(): Collection
    {
        return $this->athletes;
    }

    public function addAthlete(Athlete $athlete): self
    {
        if (!$this->athletes->contains($athlete)) {
            $this->athletes->add($athlete);
            $athlete->addEpreuve($this);
        }

        return $this;
    }

    public function removeAthlete(Athlete $athlete): self
    {
        if ($this->athletes->removeElement($athlete)) {
            $athlete->removeEpreuve($this);
        }

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }
}
