CREATE TABLE Plant(
	Id INT PRIMARY KEY IDENTITY,
	Name_fr NVARCHAR(50) NOT NULL,
	Name_en NVARCHAR(50),
	Name_nl NVARCHAR(50),
	Name_la NVARCHAR(50),
	Description1_fr NVARCHAR(max),
	Description1_en NVARCHAR(max),
	Description1_nl NVARCHAR(max),
	Description2_fr NVARCHAR(max),
	Description2_en NVARCHAR(max),
	Description2_nl NVARCHAR(max),
	Description3_fr NVARCHAR(max),
	Description3_en NVARCHAR(max),
	Description3_nl NVARCHAR(max),
	IsDeleted BIT NOT NULL DEFAULT 0,
    [Image] VARBINARY(MAX),
    [Audio] VARBINARY(MAX),
    MimeTypeImage VARCHAR(25),
    MimeTypeAudio VARCHAR(25),
    Latitude FLOAT,
    Longitude FLOAT,
    Interval FLOAT,
    StartDate DATE,
    EndDate DATE,
    CategoryPlant_id INT NOT NULL REFERENCES CategoryPlant ON DELETE CASCADE
);

CREATE TABLE CategoryPlant(
	Id INT PRIMARY KEY IDENTITY,
	[Name] NVARCHAR(50) NOT NULL,
);

CREATE TABLE SeasonsOfPlants(
	Id INT PRIMARY KEY IDENTITY,
	[Seasons] INT NOT NULL,
	Plant_id INT NOT NULL REFERENCES Plant ON DELETE CASCADE
);



--CREATE TABLE Season(
--	Id INT PRIMARY KEY IDENTITY,
--	[Name] NVARCHAR(20) NOT NULL,
--);

--CREATE TABLE SeasonOfPlant
--(
--	[Id] INT PRIMARY KEY IDENTITY,
--	[IdSeason] INT NOT NULL,
--	[IdPlant] INT NOT NULL,
--	CONSTRAINT FK_SEASON FOREIGN KEY (IdSeason) REFERENCES [Season] (Id) ON DELETE CASCADE,
--	CONSTRAINT FK_PLANT FOREIGN KEY (IdPlant) REFERENCES [Plant] (Id)
--)




--Fixtures sentier

INSERT INTO Plant
(
	Name_fr,
	Name_la,
	CategoryPlant_id,
	IsDeleted
) VALUES
(
	'insert',
	'l''aconit tue-loup',
	1,
	0
)
