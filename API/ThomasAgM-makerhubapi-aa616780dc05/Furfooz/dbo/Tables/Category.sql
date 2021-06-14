CREATE TABLE [dbo].[Category] (
    [Id]        INT          IDENTITY (1, 1) NOT NULL,
    [Name_fr]   VARCHAR (56) NOT NULL,
    [Name_nl]   VARCHAR (56) NULL,
    [Name_en]   VARCHAR (56) NULL,
    [IsDeleted] BIT          NULL,
    [PinColor]  VARCHAR (50) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

