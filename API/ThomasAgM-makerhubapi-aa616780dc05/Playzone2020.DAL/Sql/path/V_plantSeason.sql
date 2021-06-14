CREATE VIEW [V_PlantSeason]AS
SELECT        T.Name_fr, T.Name_en, T.Name_nl, T.Name_la, T.Description1_fr, T.Description1_en, T.Description1_nl, T.Description2_fr, T.Description2_en, T.Description2_nl, T.Description3_fr, T.Description3_en, T.Description3_nl, 
                         T.IsDeleted, T.Image, T.MimeTypeImage, T.Latitude, T.Longitude, T.CategoryPlant_id, COALESCE (L.Seasons, - 1) AS Seasons, T.Id
FROM            dbo.Plant AS T LEFT OUTER JOIN
                         dbo.SeasonsOfPlants AS L ON L.Plant_id = T.Id


